import { Play, MoreHorizontal, Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card } from '../ui/card'

interface LibraryViewProps {
  setCurrentTrack: (track: any) => void
  setIsPlaying: (playing: boolean) => void
}

export function LibraryView({ setCurrentTrack, setIsPlaying }: LibraryViewProps) {
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

  const handlePlayTrack = (track: any) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Your Library</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-light-gray w-4 h-4" />
            <Input
              type="text"
              placeholder="Search in Your Library"
              className="pl-10 bg-spotify-gray text-white placeholder-spotify-light-gray border-none rounded-md h-10 w-64"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-spotify-light-gray hover:text-white"
          >
            Recently added
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6">
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
      <div className="space-y-2">
        {libraryItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-3 rounded-lg hover:bg-spotify-gray transition-colors cursor-pointer group"
            onClick={() => handlePlayTrack(item)}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-2xl mr-4">
              {item.image}
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-spotify-light-gray text-sm">
                <span className="capitalize">{item.type}</span> • {item.count}
              </p>
            </div>
            <div className="text-spotify-light-gray text-sm mr-4">
              {item.lastPlayed}
            </div>
            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                className="bg-spotify-green hover:bg-spotify-green-hover text-black rounded-full w-10 h-10"
              >
                <Play className="w-4 h-4 fill-current" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-spotify-light-gray hover:text-white w-10 h-10"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}