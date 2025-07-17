import { Play, MoreHorizontal, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card } from '../ui/card'

interface LibraryViewProps {
  playTrack: (track: any, trackList?: any[]) => void
}

export function LibraryView({ playTrack }: LibraryViewProps) {
  const libraryItems = [
    { 
      id: 1, 
      title: 'Liked Songs', 
      type: 'playlist', 
      count: '234 songs',
      image: '💚',
      lastPlayed: '2 days ago'
    },
    { 
      id: 2, 
      title: 'My Playlist #1', 
      type: 'playlist', 
      count: '45 songs',
      image: '🎵',
      lastPlayed: '1 week ago'
    },
    { 
      id: 3, 
      title: 'Discover Weekly', 
      type: 'playlist', 
      count: '30 songs',
      image: '🔍',
      lastPlayed: '3 days ago'
    },
    { 
      id: 4, 
      title: 'Daily Mix 1', 
      type: 'playlist', 
      count: '50 songs',
      image: '🎧',
      lastPlayed: '1 day ago'
    },
    { 
      id: 5, 
      title: 'Chill Hits', 
      type: 'playlist', 
      count: '67 songs',
      image: '😌',
      lastPlayed: '5 days ago'
    },
    { 
      id: 6, 
      title: 'Rock Classics', 
      type: 'playlist', 
      count: '89 songs',
      image: '🎸',
      lastPlayed: '1 week ago'
    },
    { 
      id: 7, 
      title: 'The Weeknd', 
      type: 'artist', 
      count: 'Artist',
      image: '👨‍🎤',
      lastPlayed: '2 days ago'
    },
    { 
      id: 8, 
      title: 'After Hours', 
      type: 'album', 
      count: 'Album • The Weeknd',
      image: '🌙',
      lastPlayed: '4 days ago'
    },
  ]

  const handlePlayTrack = (track: any, trackList?: any[]) => {
    playTrack(track, trackList)
  }

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">Your Library</h1>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-light-gray w-4 h-4" />
            <Input
              type="text"
              placeholder="Search in Your Library"
              className="pl-10 bg-spotify-gray text-white placeholder-spotify-light-gray border-none rounded-md h-10 w-full lg:w-64"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-spotify-light-gray hover:text-white justify-start lg:justify-center"
          >
            Recently added
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
        <Button
          variant="outline"
          size="sm"
          className="bg-spotify-green text-black border-spotify-green hover:bg-spotify-green-hover"
        >
          All
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-spotify-light-gray text-spotify-light-gray hover:text-white hover:border-white"
        >
          Playlists
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-spotify-light-gray text-spotify-light-gray hover:text-white hover:border-white"
        >
          Artists
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-spotify-light-gray text-spotify-light-gray hover:text-white hover:border-white"
        >
          Albums
        </Button>
      </div>

      {/* Library Items */}
      <div className="space-y-1 lg:space-y-2">
        {libraryItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-3 rounded-lg hover:bg-spotify-gray transition-colors cursor-pointer group"
            onClick={() => handlePlayTrack(item, libraryItems)}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-xl lg:text-2xl mr-3 lg:mr-4 flex-shrink-0">
              {item.image}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm lg:text-base truncate">{item.title}</h3>
              <p className="text-spotify-light-gray text-xs lg:text-sm">
                <span className="capitalize">{item.type}</span> • {item.count}
              </p>
            </div>
            <div className="hidden lg:block text-spotify-light-gray text-sm mr-4">
              {item.lastPlayed}
            </div>
            <div className="flex items-center space-x-1 lg:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                className="bg-spotify-green hover:bg-spotify-green-hover text-black rounded-full w-8 h-8 lg:w-10 lg:h-10"
              >
                <Play className="w-3 h-3 lg:w-4 lg:h-4 fill-current" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-spotify-light-gray hover:text-white w-8 h-8 lg:w-10 lg:h-10"
              >
                <MoreHorizontal className="w-3 h-3 lg:w-4 lg:h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}