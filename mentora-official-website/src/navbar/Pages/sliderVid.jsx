import React, { useState, useRef, useEffect } from 'react';
import "./sliderVid.css";
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { MdAdd } from 'react-icons/md';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [progress, setProgress] = useState(0); // percent of current segment


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const videoRef = useRef(null);
  const popupRef = useRef(null);

  const slideNames = ["slide 1", "slide 2", "slide 3", "slide 4", "slide 5"];

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleButtonClick = (index) => {
    if (index !== currentImageIndex && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        if (videoRef.current) {
          videoRef.current.load();
        }
        setTransitioning(false);
      }, 300);
    }
    setIsPopupVisible(false);
  };

  const togglePopup = () => setIsPopupVisible(!isPopupVisible);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle resizing
  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Auto slide only on desktop
  useEffect(() => {
    let intervalId;
    let progressInterval;
  
    if (!isMobile) {
      setProgress(0);
  
      // Increment segment progress every 100ms
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 2;
          return 100;
        });
      }, 100); // ~5s to reach 100%
  
      // Move to next slide every 5s
      intervalId = setInterval(() => {
        goToNext();
        setProgress(0);
      }, 5000);
    }
  
    return () => {
      clearInterval(intervalId);
      clearInterval(progressInterval);
    };
  }, [currentImageIndex, isMobile]);
  
  

  // Close popup if clicking outside
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
          <img key={images[currentImageIndex]} src={images[currentImageIndex]} alt="" />
          
        </div>

        {/* Show navigation arrows only on mobile */}
        {isMobile && (
          <div className="mobile-nav-buttons">
            <button className='prev' onClick={goToPrev}><IoIosArrowDown/></button>
            <button className='next' onClick={goToNext}><IoIosArrowDown/></button>
          </div>
        )}

    {!isMobile && (
      <div className="multi-progress-bar">
        {images.map((_, index) => {
          let fill = 0;
          if (index < currentImageIndex) fill = 100;
          else if (index === currentImageIndex) fill = progress;
          return (
            <div key={index} className="progress-segment-wrapper">
              <div className="progress-segment" style={{ width: `${fill}%` }}></div>
            </div>
          );
        })}

      </div>
    )}


      </div>

      <div className="showcaseHeader">
        <div className="interfaceSlider">
          <div className="slidersButton">
            <button className="slide-button" onClick={togglePopup}>
              {slideNames[currentImageIndex]} <IoIosArrowDown style={{ fontSize: '24px' }} />
            </button>

            {isPopupVisible && (
              <div className="popup-list" ref={popupRef}>
                {images.map((_, index) => (
                  <div key={index} className="popup-item-container">
                    <button className="popup-item" onClick={() => handleButtonClick(index)}>
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
                  <button className="popup-item" onClick={() => handleButtonClick(index)}>
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
