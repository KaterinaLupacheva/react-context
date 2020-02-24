import React from 'react';
import VideoContext from '../context/video.context';

const styles = {
  width: '100px',
  height: '5vh',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  marginTop: '20px',
};

class PlayPauseButton extends React.Component {
  componentDidMount() {
    let vidContext = this.context;
    console.log('Video status: ' + vidContext.status);
  }

  render() {
    return (
      <VideoContext.Consumer>
        {({ status, togglePlayPause }) => (
          <button style={styles} onClick={togglePlayPause}>
            {status === 'playing' ? 'PAUSE' : 'PLAY'}
          </button>
        )}
      </VideoContext.Consumer>
    );
  }
}

PlayPauseButton.contextType = VideoContext;

export default PlayPauseButton;
