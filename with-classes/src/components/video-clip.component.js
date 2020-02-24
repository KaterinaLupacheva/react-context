import React, { useContext, useEffect, createRef } from 'react';
import VideoContext from '../context/video.context';

const videoStyles = {
  marginTop: '100px',
  width: '50vw',
};

const VideoClip = () => {
  const { status } = useContext(VideoContext);
  console.log('Status from video ' + status);

  const vidRef = createRef();

  useEffect(() => {
    if (status === 'playing') {
      vidRef.current.play();
    } else if (status === 'paused') {
      vidRef.current.pause();
    }
  });

  return (
    <video style={videoStyles} controls ref={vidRef}>
      <source
        src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoClip;
