import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentView, setCurrentView] = useState('home')

  return (
    <div className="h-screen bg-spotify-black text-white flex flex-col dark">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <MainContent 
          currentView={currentView} 
          setCurrentTrack={setCurrentTrack}
          setIsPlaying={setIsPlaying}
        />
      </div>
      <MusicPlayer 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  )
}

export default App