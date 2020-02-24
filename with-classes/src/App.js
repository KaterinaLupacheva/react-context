import React from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import VideoContext from './context/video.context';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.playVideo = () => {
      let { status } = this.state;
      if (status === 'playing') {
        this.state.vidRef.current.play();
      } else if (status === 'paused') {
        this.state.vidRef.current.pause();
      }
    };

    this.togglePlayPause = () => {
      this.setState(
        state => ({
          vidRef: React.createRef(),
          status: state.status === 'playing' ? 'paused' : 'playing',
        }),
        () => this.playVideo()
      );
    };

    this.state = {
      status: 'paused',
      togglePlayPause: this.togglePlayPause,
      vidRef: undefined,
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
