import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { MusicPlayer } from './components/MusicPlayer'

// Sample tracks for the queue system
const sampleTracks = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', image: '🌟' },
  { id: 2, title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', duration: '2:54', image: '🍉' },
  { id: 3, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23', image: '✨' },
  { id: 4, title: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', image: '💜' },
  { id: 5, title: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*CK LOVE 3', duration: '2:21', image: '🎵' },
  { id: 6, title: 'Anti-Hero', artist: 'Taylor Swift', album: 'Midnights', duration: '3:20', image: '🌙' },
  { id: 7, title: 'As It Was', artist: 'Harry Styles', album: 'Harry\'s House', duration: '2:47', image: '🏠' },
  { id: 8, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: '3:58', image: '🌊' },
]

function App() {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [queue, setQueue] = useState(sampleTracks)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const playTrack = (track: any, trackList?: any[]) => {
    if (trackList) {
      setQueue(trackList)
      const index = trackList.findIndex(t => t.id === track.id)
      setCurrentTrackIndex(index >= 0 ? index : 0)
    } else {
      // If no track list provided, find in current queue or add to queue
      const existingIndex = queue.findIndex(t => t.id === track.id)
      if (existingIndex >= 0) {
        setCurrentTrackIndex(existingIndex)
      } else {
        setQueue(prev => [...prev, track])
        setCurrentTrackIndex(queue.length)
      }
    }
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const playNext = () => {
    if (currentTrackIndex < queue.length - 1) {
      const nextIndex = currentTrackIndex + 1
      setCurrentTrackIndex(nextIndex)
      setCurrentTrack(queue[nextIndex])
      setIsPlaying(true)
    }
  }

  const playPrevious = () => {
    if (currentTrackIndex > 0) {
      const prevIndex = currentTrackIndex - 1
      setCurrentTrackIndex(prevIndex)
      setCurrentTrack(queue[prevIndex])
      setIsPlaying(true)
    }
  }

  return (
    <div className="h-screen bg-spotify-black text-white flex flex-col dark">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentView={currentView} 
          setCurrentView={setCurrentView}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <MainContent 
          currentView={currentView} 
          playTrack={playTrack}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <MusicPlayer 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onNext={playNext}
        onPrevious={playPrevious}
        hasNext={currentTrackIndex < queue.length - 1}
        hasPrevious={currentTrackIndex > 0}
      />
    </div>
  )
}

export default App