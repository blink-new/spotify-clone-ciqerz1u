import { useState } from 'react'
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2, 
  VolumeX,
  Heart,
  PictureInPicture,
  Maximize2
} from 'lucide-react'
import { Button } from './ui/button'
import { Slider } from './ui/slider'

interface MusicPlayerProps {
  currentTrack: any
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  onNext: () => void
  onPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export function MusicPlayer({ 
  currentTrack, 
  isPlaying, 
  setIsPlaying, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: MusicPlayerProps) {
  const [progress, setProgress] = useState([30])
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState('off') // 'off', 'all', 'one'
  const [isLiked, setIsLiked] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled)
  }

  const toggleRepeat = () => {
    const modes = ['off', 'all', 'one']
    const currentIndex = modes.indexOf(repeatMode)
    const nextIndex = (currentIndex + 1) % modes.length
    setRepeatMode(modes[nextIndex])
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="h-20 lg:h-24 bg-spotify-dark-gray border-t border-spotify-gray flex items-center px-2 lg:px-4">
      {/* Left Section - Current Track */}
      <div className="flex items-center w-1/3 lg:w-80 min-w-0">
        {currentTrack ? (
          <>
            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center text-lg lg:text-xl mr-2 lg:mr-4 flex-shrink-0">
              {currentTrack.image || '🎵'}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium truncate text-sm lg:text-base">{currentTrack.title || 'No track selected'}</h4>
              <p className="text-spotify-light-gray text-xs lg:text-sm truncate">{currentTrack.artist || 'Unknown artist'}</p>
            </div>
            <div className="hidden lg:flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className={`ml-2 ${isLiked ? 'text-spotify-green' : 'text-spotify-light-gray hover:text-white'}`}
                onClick={toggleLike}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-spotify-light-gray hover:text-white"
              >
                <PictureInPicture className="w-4 h-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-spotify-light-gray text-sm lg:text-base">No track playing</div>
        )}
      </div>

      {/* Center Section - Player Controls */}
      <div className="flex-1 flex flex-col items-center max-w-2xl mx-2 lg:mx-8">
        {/* Control Buttons */}
        <div className="flex items-center space-x-2 lg:space-x-4 mb-1 lg:mb-2">
          <Button
            variant="ghost"
            size="sm"
            className={`hidden lg:flex ${isShuffled ? 'text-spotify-green' : 'text-spotify-light-gray hover:text-white'}`}
            onClick={toggleShuffle}
          >
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`text-spotify-light-gray hover:text-white ${!hasPrevious ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onPrevious}
            disabled={!hasPrevious}
          >
            <SkipBack className="w-4 h-4 lg:w-5 lg:h-5" />
          </Button>
          <Button
            className="bg-white hover:bg-gray-200 text-black rounded-full w-8 h-8 lg:w-10 lg:h-10"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
            ) : (
              <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-current ml-0.5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`text-spotify-light-gray hover:text-white ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onNext}
            disabled={!hasNext}
          >
            <SkipForward className="w-4 h-4 lg:w-5 lg:h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`hidden lg:flex ${
              repeatMode === 'off' 
                ? 'text-spotify-light-gray hover:text-white' 
                : 'text-spotify-green'
            }`}
            onClick={toggleRepeat}
          >
            <Repeat className="w-4 h-4" />
            {repeatMode === 'one' && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-spotify-green rounded-full"></span>
            )}
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center w-full space-x-1 lg:space-x-2">
          <span className="text-spotify-light-gray text-xs w-8 lg:w-10 text-right">
            {formatTime(Math.floor((progress[0] / 100) * 180))}
          </span>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-spotify-light-gray text-xs w-8 lg:w-10">
            {formatTime(180)}
          </span>
        </div>
      </div>

      {/* Right Section - Volume & Other Controls */}
      <div className="hidden lg:flex items-center space-x-2 w-80 justify-end">
        <Button
          variant="ghost"
          size="sm"
          className="text-spotify-light-gray hover:text-white"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-spotify-light-gray hover:text-white"
          onClick={toggleMute}
        >
          {isMuted || volume[0] === 0 ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </Button>
        <div className="w-24">
          <Slider
            value={isMuted ? [0] : volume}
            onValueChange={(value) => {
              setVolume(value)
              if (value[0] > 0) setIsMuted(false)
            }}
            max={100}
            step={1}
          />
        </div>
      </div>

      {/* Mobile Right Section - Just Volume */}
      <div className="lg:hidden flex items-center justify-end w-1/3">
        <Button
          variant="ghost"
          size="sm"
          className="text-spotify-light-gray hover:text-white"
          onClick={toggleMute}
        >
          {isMuted || volume[0] === 0 ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  )
}