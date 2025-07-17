import { useState } from 'react'
import { Search, Play } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

interface SearchViewProps {
  playTrack: (track: any, trackList?: any[]) => void
}

export function SearchView({ playTrack }: SearchViewProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const browseCategories = [
    { id: 1, title: 'Pop', color: 'from-pink-500 to-purple-600', emoji: '🎤' },
    { id: 2, title: 'Hip-Hop', color: 'from-orange-500 to-red-600', emoji: '🎵' },
    { id: 3, title: 'Rock', color: 'from-gray-600 to-black', emoji: '🎸' },
    { id: 4, title: 'Jazz', color: 'from-blue-500 to-purple-600', emoji: '🎺' },
    { id: 5, title: 'Electronic', color: 'from-cyan-500 to-blue-600', emoji: '🎧' },
    { id: 6, title: 'Classical', color: 'from-yellow-500 to-orange-600', emoji: '🎼' },
    { id: 7, title: 'Country', color: 'from-green-500 to-yellow-600', emoji: '🤠' },
    { id: 8, title: 'R&B', color: 'from-purple-500 to-pink-600', emoji: '💜' },
  ]

  const searchResults = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', type: 'song', image: '🌟' },
    { id: 2, title: 'After Hours', artist: 'The Weeknd', type: 'album', image: '🌙' },
    { id: 3, title: 'The Weeknd', artist: '85M monthly listeners', type: 'artist', image: '👨‍🎤' },
    { id: 4, title: 'Starboy', artist: 'The Weeknd', type: 'song', image: '⭐' },
  ]

  const handlePlayTrack = (track: any, trackList?: any[]) => {
    playTrack(track, trackList)
  }

  return (
    <div className="p-4 lg:p-8">
      {/* Search Header */}
      <div className="mb-6 lg:mb-8">
        <div className="relative max-w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-light-gray w-4 h-4 lg:w-5 lg:h-5" />
          <Input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 lg:pl-12 bg-white text-black placeholder-gray-500 border-none rounded-full h-10 lg:h-12 text-sm font-medium w-full"
          />
        </div>
      </div>

      {searchQuery ? (
        /* Search Results */
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Search results for "{searchQuery}"</h2>
          <div className="space-y-3 lg:space-y-4">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="flex items-center p-3 lg:p-4 rounded-lg hover:bg-spotify-gray transition-colors cursor-pointer group"
                onClick={() => handlePlayTrack(result, searchResults)}
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-xl lg:text-2xl mr-3 lg:mr-4 flex-shrink-0">
                  {result.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm lg:text-base truncate">{result.title}</h3>
                  <p className="text-spotify-light-gray text-xs lg:text-sm">
                    <span className="capitalize">{result.type}</span> • {result.artist}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="bg-spotify-green hover:bg-spotify-green-hover text-black rounded-full w-10 h-10 lg:w-12 lg:h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                >
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Browse Categories */
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Browse all</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
            {browseCategories.map((category) => (
              <Card
                key={category.id}
                className={`bg-gradient-to-br ${category.color} p-4 lg:p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden h-24 lg:h-32`}
              >
                <h3 className="text-white font-bold text-base lg:text-xl mb-1 lg:mb-2">{category.title}</h3>
                <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 text-2xl lg:text-4xl opacity-80">
                  {category.emoji}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}