import './counter.css'; // Import the CSS file
import { FaTelegramPlane } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import Popup from './popup';
import { Button } from '@mui/material';



const Counter = ({ targetNumber = 1562315, duration = 2000 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [openSupportPopup, setOpenSupportPopup] = useState(false)
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = containerRef.current; // Store ref value
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounting(targetNumber, duration);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); // Use stored value
    };
  }, [targetNumber, duration]);

  const startCounting = (target, duration) => {
    const start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      setCurrentNumber(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const numberDigits = currentNumber
    .toString()
    .padStart(targetNumber.toString().length, "0")
    .split("");


    const openWhatsApp = () => {
      const phoneNumber = "2347060692143";
      const message = "Hello, I’d like to know more about your services.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank"); // open in new tab
    };

    const openLinkedIn = () => {
      const linkedInUrl = "https://www.linkedin.com/in/your-username/";
      window.open(linkedInUrl, "_blank");
    };


  return (
    <>
      <Popup
            openPopup={openSupportPopup}
            setOpenPopup={setOpenSupportPopup}
            title="Download APK"
            actions={
            <>
                <Button onClick={openWhatsApp} color="secondary">
                  Whatsapp
                </Button>
                <Button onClick={openLinkedIn} variant="contained" color="primary">
                  Linkedin
                </Button>
            </>
            }
        >
            <p>Got questions or need assistance? Our team is here to help. Reach out to us anytime via LinkedIn or WhatsApp.</p>
        </Popup>
            <div className="bannerSubCounter">
                <div className="subCounterCont">
                    <div className="SubTxts">
                        <h2>Need Support?</h2>
                        <p>Any question Relating To project Development, Investment, Opinings e.t.c</p>
                        <button className='subSubmit'><a href="#" onClick={() => {setOpenSupportPopup(true)}}>Support Team <FaTelegramPlane /> </a> </button>
                    </div>

                    <div className="mainCounterDiv">
                        <div className="counter-container" ref={containerRef}>
                            <div className="counter-digits">
                                {numberDigits.map((digit, idx) => (
                                <div key={idx} className="digit-box">{digit}</div>
                                ))}
                            </div>
                            <p className="counter-label">Total community members</p>
                        </div>
                    </div>
                </div>
          </div>
    </>
  );
};

export default Counter;


/*const Counter = () => {

  return (
    <>
            <div className="bannerSubCounter">
                <div className="subCounterCont">
                    <div className="SubTxts">
                        <h2>Support?</h2>
                        <p>Any question Relating To project Development, Investment, Opinings e.t.c</p>
                        <button className='subSubmit'>Support Team <FaTelegram/> </button>
                    </div>

                    <div className="mainCounterDiv">
                        <div className="counter">
                            <div className="counterBox">
                                <span className='countSpan'>0</span><span className='countSpan'>0</span><span className='countSpan'>0</span><span className='countSpan'>0</span><span className='countSpan'>0</span><span className='countSpan'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    </>
  );
};

export default Counter;

<div className="counter-container" ref={containerRef}>
      <div className="counter-digits">
        {numberDigits.map((digit, idx) => (
          <div key={idx} className="digit-box">{digit}</div>
        ))}
      </div>
      <p className="counter-label">Total community members</p>
    </div>*/