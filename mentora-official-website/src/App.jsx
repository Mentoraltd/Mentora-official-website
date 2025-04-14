//import { useState } from 'react'
import './App.css';
import HeroVideo from './assets/072224_UpdatedSection2_Stroke_2px.mp4' 
import Navigation from './navbar/navigation';

function App() {

  const Features = {
    box1: {
      title: "Adaptive Learning",
      content: " Adjusts learning paths based on progress and needs. Adaptive learning tailored to your progress.",
    },
    box2: {
      title: "Smart Study Planner",
      content: "Central to planning personalized schedules. Plan smarter with AI-powered schedules",
    },
    box3: {
      title: "Focus Mode with Pomodoro Timer",
      content: "Stay focused with Pomodoro intervals. Time-based study sessions to enhance concentration.",
    },
    box4: {
      title: "Well-being & Break Reminders",
      content: "Maintain balance with well-being reminders. Ensures mental health balance by scheduling breaks.",
    },
    box5: {
    title: "Virtual Flashcards with Spaced Repetition",
    content: "Helps students retain knowledge effectively. Spaced repetition for long-term retention",
    }
  };

  const levels = {
    edu2: {
      title: "University student",
      content: "Ages 18–above, balancing time between study and social activities, in need of productivity tools.",
    },
    edu3: {
      title: "Self Learners",
      content: "Looking for personalized learning paths and progress tracking tools.",
    },
  };

  const Importance = {
    imp1: {
      title: "Lorem epsomru uuribq",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores!",
    },
    img2: {
      title: "Self Learners",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores!",
    },
    imp3: {
      title: "Self Learners",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores!",
    },
    imp4: {
      title: "Self Learners",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolores!",
    },
  };
  

  return (

    <>
      
      <Navigation/>

      <section className='Hero'>
          <div className="heroContainer">
              <h1> Adaptive, AI-driven study companion. simplify complex subjects and enhance productivity through smart features</h1>
              <p>Join a learning platform dedicated to transforming the way students learn.</p>
          </div>
            <div className="heroCtaAccess"><span className='anchorTxt'>Get access to mentora App</span> <button><span className="btnTxt">Download Mentora</span></button></div>
      </section>

      <section className="showcase">
        <div className="sliderContainer">
          <video src={HeroVideo}></video>
        </div>
        <div className="showcaseHeader">
          <div className="interfaceSlider">
            <div className="slidersButton">
              <button className='sliderList activeSlider'>Slide1</button>
              <button className='sliderList'>slide2</button>
              <button className='sliderList'>slide3</button>
              <button className='sliderList'>slide4</button>
              <button className='sliderList'>slide5</button>
          </div>
          </div>
          <span>Transform your study experience, making simplified educational experience</span>
        </div>

        <div className="showcaseDesc">
          <div className="descTop">
            <h4>Personalized Experience</h4>
            <p>To revolutionize the learning experience, we provide personalized,
            engaging, and efficient study tools that empower students worldwide
            to reach their full potential.</p>
          </div>

          <div className="descImgContain">

          </div>

          <div className="parallaxEffect">
            <div className="parallaxScrollingInterection">
              <div className="parallaxLeft">
                {Object.keys(Features).map((key) => (
                  <div className="parallaxBox">
                  
                    <div className="PBoxTextCont" key={key}>
                      <h2>{Features[key].title}</h2>
                      <div className="boxSpacingBlock"></div>
                      <p>{Features[key].content}</p>
                      <div className="boxSpacingBlock"></div>
                    </div>
                  
                </div>))}
              </div>

              <div className="imagesAnimationParallaxEffect">
                <div className="imgParallaxContain">
                  <div className="imgParallax">a</div>
                </div>
                <div className="imgParallaxContain">
                  <div className="imgParallax">b</div>
                </div>
                <div className="imgParallaxContain">
                  <div className="imgParallax">c</div>
                </div>
                <div className="imgParallaxContain">
                  <div className="imgParallax">b</div>
                </div>
                <div className="imgParallaxContain">
                  <div className="imgParallax">e</div>
                </div>
              </div>
            </div>
          </div>
          

          <div className="lp-Grid">
            <div className="pepBody">
              <div className="pepBodyTop">
                <h3>Highschool student</h3>
                <p>Ages 16–18, seeking help with managing study schedules and focus.</p>
              </div>

              <div className="pepBodyBottom">
                {Object.keys(levels).map((key) => (
                <div className="pepBox autoShow" key={key}>
                  <h3>{levels[key].title}</h3>
                  <p>{levels[key].content}</p>
                </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section className="knowImportance">
        <div className="knowImportanceContain">
          <div className="leftSegment">
          {Object.keys(Importance).map((key) => (
                <div className="accordion" key={key}>
                  <dt>
                    <button className="accordionBtn">
                      <h3>{Importance[key].title}</h3>
                    </button>
                  </dt>
                  <dd>
                    <p>{Importance[key].content}</p>
                  </dd>
                  
                </div>
                ))}
          </div>
          <div className="rightImgSegment"></div>
        </div>
      </section>
    </>
  )
}

export default App
