import React from 'react';
import VideoClip from './components/video-clip.component';
import PlayPauseButton from './components/play-pause-button.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <VideoClip />
      <PlayPauseButton />
    </div>
  );
}

export default App;
