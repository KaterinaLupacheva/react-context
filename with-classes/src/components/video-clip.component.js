import React from 'react';
import VideoContext from '../context/video.context';

const videoStyles = {
  marginTop: '100px',
  width: '50vw',
};

class VideoClip extends React.Component {
  render() {
    return (
      <video style={videoStyles} controls ref={this.context.vidRef}>
        <source
          src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
          type="video/mp4"
        />
      </video>
    );
  }
}

VideoClip.contextType = VideoContext;

export default VideoClip;
