import React, { useState } from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import VideoContext from './context/video.context';
import './App.css';

function App() {
  const [status, setStatus] = useState('paused');
  const togglePlayPause = () => setStatus(status === 'playing' ? 'paused' : 'playing');
  return (
    <div className="App">
      <VideoContext.Provider
        value={{
          status,
          togglePlayPause,
        }}
      >
        <VideoClip />
        <Controls />
      </VideoContext.Provider>
    </div>
  );
}

export default App;
