import React from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import { VideoContextProvider } from './context/video.context';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoContextProvider>
          <VideoClip />
          <Controls />
        </VideoContextProvider>
      </div>
    );
  }
}

export default App;
