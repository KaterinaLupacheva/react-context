import { createContext } from 'react';

const VideoContext = createContext({
  status: 'paused',
  togglePlayPause: () => {},
  vidRef: undefined,
});

export default VideoContext;
