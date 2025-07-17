import { Play, Clock } from 'lucide-react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

interface HomeViewProps {
  playTrack: (track: any, trackList?: any[]) => void
}

export function HomeView({ playTrack }: HomeViewProps) {
  const recentlyPlayed = [
    { id: 1, title: 'Liked Songs', type: 'playlist', image: '💚' },
    { id: 2, title: 'Discover Weekly', type: 'playlist', image: '🎵' },
    { id: 3, title: 'Daily Mix 1', type: 'playlist', image: '🎧' },
    { id: 4, title: 'Rock Classics', type: 'playlist', image: '🎸' },
    { id: 5, title: 'Chill Hits', type: 'playlist', image: '😌' },
    { id: 6, title: 'Pop Hits', type: 'playlist', image: '🎤' },
  ]

  const madeForYou = [
    { id: 1, title: 'Daily Mix 1', subtitle: 'The Weeknd, Dua Lipa, and more', image: '🎵' },
    { id: 2, title: 'Daily Mix 2', subtitle: 'Ed Sheeran, Taylor Swift, and more', image: '🎶' },
    { id: 3, title: 'Discover Weekly', subtitle: 'Your weekly mixtape of fresh music', image: '🔍' },
    { id: 4, title: 'Release Radar', subtitle: 'Catch all the latest music from artists you follow', image: '📡' },
    { id: 5, title: 'On Repeat', subtitle: 'Songs you can\'t stop playing', image: '🔁' },
  ]

  const popularTracks = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20' },
    { id: 2, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54' },
    { id: 3, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23' },
    { id: 4, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58' },
    { id: 5, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*CK LOVE 3', duration: '2:21' },
  ]

  const handlePlayTrack = (track: any, trackList?: any[]) => {
    playTrack(track, trackList)
  }

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Good evening</h1>
      </div>

      {/* Recently Played */}
      <div className="mb-6 lg:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
          {recentlyPlayed.map((item) => (
            <Card
              key={item.id}
              className="bg-spotify-gray hover:bg-opacity-80 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center p-3 lg:p-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center text-xl lg:text-2xl mr-3 lg:mr-4 flex-shrink-0">
                  {item.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm lg:text-base truncate">{item.title}</h3>
                  <p className="text-spotify-light-gray text-xs lg:text-sm capitalize">{item.type}</p>
                </div>
                <Button
                  size="sm"
                  className="bg-spotify-green hover:bg-spotify-green-hover text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  onClick={() => handlePlayTrack(item)}
                >
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Made for You */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Made for you</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {madeForYou.map((item) => (
            <Card
              key={item.id}
              className="bg-spotify-dark-gray hover:bg-spotify-gray transition-all duration-200 cursor-pointer group p-3 lg:p-4"
            >
              <div className="relative mb-3 lg:mb-4">
                <div className="w-full aspect-square bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-2xl lg:text-4xl">
                  {item.image}
                </div>
                <Button
                  size="sm"
                  className="absolute bottom-2 right-2 bg-spotify-green hover:bg-spotify-green-hover text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={() => handlePlayTrack(item)}
                >
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                </Button>
              </div>
              <h3 className="text-white font-semibold mb-1 lg:mb-2 truncate text-sm lg:text-base">{item.title}</h3>
              <p className="text-spotify-light-gray text-xs lg:text-sm line-clamp-2">{item.subtitle}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular Tracks */}
      <div>
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Popular right now</h2>
        <div className="bg-spotify-dark-gray rounded-lg p-3 lg:p-4">
          {/* Desktop Header */}
          <div className="hidden lg:grid grid-cols-[16px_1fr_1fr_1fr_60px] gap-4 text-spotify-light-gray text-sm font-medium mb-4 px-4">
            <div>#</div>
            <div>TITLE</div>
            <div>ALBUM</div>
            <div>DATE ADDED</div>
            <div><Clock className="w-4 h-4" /></div>
          </div>
          <div className="space-y-1 lg:space-y-2">
            {popularTracks.map((track, index) => (
              <div
                key={track.id}
                className="grid grid-cols-[24px_1fr_auto] lg:grid-cols-[16px_1fr_1fr_1fr_60px] gap-2 lg:gap-4 items-center p-2 rounded hover:bg-spotify-gray group cursor-pointer"
                onClick={() => handlePlayTrack(track, popularTracks)}
              >
                <div className="text-spotify-light-gray text-sm">{index + 1}</div>
                <div className="min-w-0">
                  <div className="text-white font-medium text-sm lg:text-base truncate">{track.title}</div>
                  <div className="text-spotify-light-gray text-xs lg:text-sm truncate">{track.artist}</div>
                </div>
                {/* Desktop columns */}
                <div className="hidden lg:block text-spotify-light-gray text-sm">{track.album}</div>
                <div className="hidden lg:block text-spotify-light-gray text-sm">3 days ago</div>
                <div className="text-spotify-light-gray text-xs lg:text-sm">{track.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}