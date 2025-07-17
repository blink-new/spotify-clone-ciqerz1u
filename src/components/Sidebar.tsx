import { Home, Search, Library, Plus, Heart } from 'lucide-react'
import { Button } from './ui/button'

interface SidebarProps {
  currentView: string
  setCurrentView: (view: string) => void
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
  ]

  const playlists = [
    'Liked Songs',
    'My Playlist #1',
    'Discover Weekly',
    'Release Radar',
    'Daily Mix 1',
    'Daily Mix 2',
    'Chill Hits',
    'Rock Classics',
  ]

  return (
    <div className="w-64 bg-spotify-black flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-lg">♪</span>
          </div>
          <span className="text-white font-bold text-xl">Spotify</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 space-y-2">
        {mainNavItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start text-left h-10 px-3 ${
                currentView === item.id
                  ? 'text-white bg-spotify-gray'
                  : 'text-spotify-light-gray hover:text-white hover:bg-spotify-gray'
              }`}
              onClick={() => setCurrentView(item.id)}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          )
        })}
      </nav>

      {/* Create Playlist */}
      <div className="px-6 mt-6">
        <Button
          variant="ghost"
          className="w-full justify-start text-left h-10 px-3 text-spotify-light-gray hover:text-white hover:bg-spotify-gray"
        >
          <Plus className="w-5 h-5 mr-3" />
          Create Playlist
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-left h-10 px-3 text-spotify-light-gray hover:text-white hover:bg-spotify-gray"
        >
          <Heart className="w-5 h-5 mr-3" />
          Liked Songs
        </Button>
      </div>

      {/* Separator */}
      <div className="mx-6 my-4 border-t border-spotify-gray"></div>

      {/* Playlists */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-1">
          {playlists.map((playlist, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-left h-8 px-3 text-spotify-light-gray hover:text-white hover:bg-spotify-gray text-sm"
            >
              {playlist}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}