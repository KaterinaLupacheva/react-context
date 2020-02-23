import React, { createContext, useState } from 'react';

export const VideoContext = createContext({
  status: null,
  togglePlayPause: () => {},
});

export const VideoContextProvider = props => {
  const togglePlayPause = newStatus => {
    setState({ ...state, status: newStatus });
  };

  const [state, setState] = useState({
    status: 'playing',
    togglePlayPause: togglePlayPause,
  });

  return <VideoContext.Provider value={state}>{props.children}</VideoContext.Provider>;
};
