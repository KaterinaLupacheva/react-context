import React from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import VideoContext from './context/video.context';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlayPause = () => {
      this.setState(state => ({
        status: state.status === 'playing' ? 'paused' : 'playing',
      }));
    };

    this.state = {
      status: 'paused',
      togglePlayPause: this.togglePlayPause,
    };
  }

  render() {
    return (
      <div className="App">
        <VideoContext.Provider value={this.state}>
          <VideoClip />
          <Controls />
        </VideoContext.Provider>
      </div>
    );
  }
}

export default App;
