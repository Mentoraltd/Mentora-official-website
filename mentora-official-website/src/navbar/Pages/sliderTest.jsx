import React, { useState, useRef, useEffect } from 'react';
import "./sliderVid.css";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";
import { MdAdd } from 'react-icons/md'; // Assuming you have react-icons installed

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const videoRef = useRef(null);
  const popupRef = useRef(null); // Ref for the popup

  const slideNames = [
    "slide 1",
    "slide 2",
    "slide 3",
    "slide 4",
    "slide 5",
  ];

  const handleButtonClick = (index) => {
    if (index !== currentImageIndex && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        if (videoRef.current) {
          videoRef.current.load();
        }
        setTimeout(() => {
          setTransitioning(false);
        }, 300);
      }, 300);
    }
    setIsPopupVisible(false);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };

    if (isPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <>
      <div className="image-slider-container">
        <div className={`image-container ${transitioning ? 'fade-out' : ''}`}>
          <video className="videoMain" ref={videoRef} autoPlay loop muted>
            <source
              key={images[currentImageIndex]}
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className={`${transitioning ? 'shrink-in' : ''}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="showcaseHeader">
        <div className="interfaceSlider">
          <div className="slidersButton">
            <button className="slide-button" onClick={togglePopup}>
              {slideNames[currentImageIndex]} <IoIosArrowDown style={{fontSize: '24px'}}/>
            </button>
            {isPopupVisible && (
              <div className="popup-list" ref={popupRef}>
                {images.map((_, index) => (
                  <div key={index} className="popup-item-container">
                    <button
                      className="popup-item"
                      onClick={() => handleButtonClick(index)}
                    >
                      {slideNames[index]}
                    </button>
                    {index === currentImageIndex && (
                      <IoIosArrowForward className="current-slide-icon" />
                    )}
                  </div>
                ))}
              </div>
            )}

          <div className="popup-listWideScreen" ref={popupRef}>
            {images.map((_, index) => (
              <div key={index} className="popup-item-container">
                <button
                  className="popup-item"
                  onClick={() => handleButtonClick(index)}
                >
                  {slideNames[index]}
                </button>
                {index === currentImageIndex && (
                  <IoIosArrowForward className="current-slide-icon" />
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
        <span>Transform your study experience, making simplified educational experience</span>
      </div>
    </>
  );
};

export default ImageSlider;

