import React from "react";

const videoStyles = {
  marginTop: "100px",
  width: "500px"
};

const VideoClip = () => {
  return (
    <video style={videoStyles} controls>
      <source
        src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoClip;
