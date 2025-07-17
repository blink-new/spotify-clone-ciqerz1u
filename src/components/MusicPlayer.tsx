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
}

export function MusicPlayer({ currentTrack, isPlaying, setIsPlaying }: MusicPlayerProps) {
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
    <div className="h-24 bg-spotify-dark-gray border-t border-spotify-gray flex items-center px-4">
      {/* Left Section - Current Track */}
      <div className="flex items-center w-80">
        {currentTrack ? (
          <>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center text-xl mr-4">
              {currentTrack.image || '🎵'}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium truncate">{currentTrack.title || 'No track selected'}</h4>
              <p className="text-spotify-light-gray text-sm truncate">{currentTrack.artist || 'Unknown artist'}</p>
            </div>
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
          </>
        ) : (
          <div className="text-spotify-light-gray">No track playing</div>
        )}
      </div>

      {/* Center Section - Player Controls */}
      <div className="flex-1 flex flex-col items-center max-w-2xl mx-8">
        {/* Control Buttons */}
        <div className="flex items-center space-x-4 mb-2">
          <Button
            variant="ghost"
            size="sm"
            className={`${isShuffled ? 'text-spotify-green' : 'text-spotify-light-gray hover:text-white'}`}
            onClick={toggleShuffle}
          >
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-spotify-light-gray hover:text-white"
          >
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            className="bg-white hover:bg-gray-200 text-black rounded-full w-8 h-8"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-spotify-light-gray hover:text-white"
          >
            <SkipForward className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`${
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
        <div className="flex items-center w-full space-x-2">
          <span className="text-spotify-light-gray text-xs w-10 text-right">
            {formatTime(Math.floor((progress[0] / 100) * 180))}
          </span>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-spotify-light-gray text-xs w-10">
            {formatTime(180)}
          </span>
        </div>
      </div>

      {/* Right Section - Volume & Other Controls */}
      <div className="flex items-center space-x-2 w-80 justify-end">
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
    </div>
  )
}