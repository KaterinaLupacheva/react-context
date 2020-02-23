import React from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <VideoClip />
      <Controls />
    </div>
  );
}

export default App;
