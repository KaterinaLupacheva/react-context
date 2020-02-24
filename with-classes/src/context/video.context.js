import React, { createContext } from 'react';

const VideoContext = createContext({});

export class VideoContextProvider extends React.Component {
  playVideo = () => {
    let { status } = this.state;
    if (status === 'playing') {
      this.state.vidRef.current.play();
    } else if (status === 'paused') {
      this.state.vidRef.current.pause();
    }
  };

  togglePlayPause = () => {
    this.setState(
      state => ({
        ...state,
        status: state.status === 'playing' ? 'paused' : 'playing',
      }),
      () => this.playVideo()
    );
  };

  state = {
    status: 'paused',
    togglePlayPause: this.togglePlayPause,
    vidRef: React.createRef(),
  };

  render() {
    return <VideoContext.Provider value={this.state}>{this.props.children}</VideoContext.Provider>;
  }
}

export default VideoContext;
