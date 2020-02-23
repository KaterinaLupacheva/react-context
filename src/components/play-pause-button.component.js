import React, { useContext } from 'react';
import { VideoContext } from '../context/video.context';

const styles = {
  width: '100px',
  height: '5vh',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  marginTop: '20px',
};

const PlayPauseButton = () => {
  const vidContext = useContext(VideoContext);
  return (
    <button
      style={styles}
      onClick={() =>
        vidContext.togglePlayPause(vidContext.status === 'playing' ? 'paused' : 'playing')
      }
    >
      {vidContext.status === 'playing' ? 'PAUSE' : 'PLAY'}
    </button>
  );
};

export default PlayPauseButton;
