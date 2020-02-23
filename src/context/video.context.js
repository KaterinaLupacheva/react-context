import { createContext } from 'react';

const VideoContext = createContext({
  status: 'paused',
  togglePlayPause: () => {},
});

export default VideoContext;
