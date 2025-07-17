import { HomeView } from './views/HomeView'
import { SearchView } from './views/SearchView'
import { LibraryView } from './views/LibraryView'

interface MainContentProps {
  currentView: string
  setCurrentTrack: (track: any) => void
  setIsPlaying: (playing: boolean) => void
}

export function MainContent({ currentView, setCurrentTrack, setIsPlaying }: MainContentProps) {
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />
      case 'search':
        return <SearchView setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />
      case 'library':
        return <LibraryView setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />
      default:
        return <HomeView setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />
    }
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-dark-gray to-spotify-black overflow-y-auto">
      {renderView()}
    </div>
  )
}