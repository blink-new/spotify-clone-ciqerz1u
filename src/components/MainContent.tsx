import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { HomeView } from './views/HomeView'
import { SearchView } from './views/SearchView'
import { LibraryView } from './views/LibraryView'

interface MainContentProps {
  currentView: string
  playTrack: (track: any, trackList?: any[]) => void
  setIsSidebarOpen: (open: boolean) => void
}

export function MainContent({ currentView, playTrack, setIsSidebarOpen }: MainContentProps) {
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView playTrack={playTrack} />
      case 'search':
        return <SearchView playTrack={playTrack} />
      case 'library':
        return <LibraryView playTrack={playTrack} />
      default:
        return <HomeView playTrack={playTrack} />
    }
  }

  const getViewTitle = () => {
    switch (currentView) {
      case 'home':
        return 'Home'
      case 'search':
        return 'Search'
      case 'library':
        return 'Your Library'
      default:
        return 'Home'
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-dark-gray to-spotify-black overflow-y-auto">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-spotify-black border-b border-spotify-gray">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsSidebarOpen(true)}
          className="text-spotify-light-gray hover:text-white"
        >
          <Menu className="w-6 h-6" />
        </Button>
        <h1 className="text-white font-bold text-lg">{getViewTitle()}</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
      
      {renderView()}
    </div>
  )
}