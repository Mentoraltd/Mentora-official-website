import React from "react";
import "./ParallaxBox.css";

const ParallaxBox = ({
  title,
  content,
  videoSrc,
}) => {
  

  return (
    <div  className="parallaxBox">
      <div className='PBoxTextCont'>
        <h2>{title}</h2>
        <div className="boxSpacingBlock"></div>
        <p>{content}</p>
      </div>

      <div className="PBoxImgContent">
        <video
          src={videoSrc}
          autoPlay  // Add this line
          loop
          muted
          preload="auto"
          className="parallax-video"
        />
      </div>
    </div>
  );
};

export default ParallaxBox;
