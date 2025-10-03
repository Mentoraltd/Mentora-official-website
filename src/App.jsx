import { useEffect, useRef, useState } from 'react'
import './App.css';
import HeroVideo from './assets/072224_UpdatedSection2_Stroke_2px.mp4' 
import Navigation from './navbar/navigation';
import Footer from '../footer';
import BackToTopBtn from './component';
import ImageSlider from './navbar/Pages/sliderVid';
import HeroSliderImg1 from "./assets/Blue Creative Abstract Shapes Sustainable Design System Blog Banner.png";
import HeroSliderImg2 from "./assets/Blue White Patterns Digital Business Blog Banner.png";
import HeroSliderImg3 from "./assets/Green& White Photo-centric Jewellery Banner.png";
import HeroSliderImg4 from "./assets/Black and Yellow Futuristic Photo Travel Website Banner (1).png";
import HeroSliderImg5 from "./assets/Black and Yellow Futuristic Photo Travel Website Banner.png";
import MobileParallaxVid2 from "./assets/smartstudy.mp4";
import MobileParallaxVid1 from "./assets/adaptivelearning.mp4";
import MobileParallaxVid3 from "./assets/focusmode.mp4";
import MobileParallaxVid4 from "./assets/wellbeing.mp4";
import MobileParallaxVid5 from "./assets/072224_UpdatedSection2_Stroke_2px.mp4";
import FImage from "./assets/133900487904506222.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";
import galaxyIllustration from './assets/undraw_chat-with-ai_ir62-removebg-preview.png';
import { MdOutlineArrowForward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import AiImg from "./assets/robotic-tutor.png";
import BlurBg from "./assets/download (2).png";
import VideoTour from "./assets/video_2025-09-01_21-43-53.mp4";
import Accordion from './navbar/Pages/accordion';
import CustomCursor from "./navbar/Pages/customcursor.jsx";
import Counter from './Resources/counter.jsx';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ParallaxSection from './Resources/ParallaxVidScroll.jsx';
import Popup from './Resources/popup.jsx';
import { Button } from '@mui/material';



function App() {
  const [openDialogPopup, setOpenDialogPopup] = useState(false);

const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardsRef = useRef([]);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      card.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(106, 0, 255, 0.2), transparent 60%)`;
    });
  }, [mousePosition]);

  const [text] = useTypewriter({
    words: ['simplify complex subjects...', 'enhance productivity through smart features.'],
    loop: {},
    typeSpeed: 180,
    delaySpeed: 120,
  });


  /*Use this for the typing animation for landing page hero section Main texts 

  const HeroMainTxt = [
    'Master Any Subject Faster with Your AI Learning Companion.',
    'Turn Complexity into Clarity — AI-Driven Learning Made Simple.',
    'AI Tutor That Makes Learning Easier, Smarter, and More Productive.',
    'From Confusion to Clarity — AI Tutor That Adapts to Your Learning Style',
    'Unlock Your Academic Potential with AI-Powered Learning Tools.'
  ]  */       
 
  /*const Features = {
    box1: {
      title: "Adaptive Learning Engine",
      image: FImage,
      content: "Our AI-driven adaptive learning system analyzes each student's performance and learning patterns in real-time to create a tailored study path. Whether you're preparing for WAEC, JAMB, university exams, or just brushing up on key topics, the platform adjusts to your pace, strengths, and weaknesses",
    },
    box2: {
      title: "Smart Study Planner",
      image: FImage,
      content: "No more guesswork in your study routine. Our Smart Planner intelligently builds personalized daily and weekly schedules based on your availability, academic goals, and upcoming exams. Designed to help students balance school, personal life, and self-study, the planner keeps you on track ",
    },
    box3: {
      title: "Focus Mode with Pomodoro Timer",
      image: FImage,
      content: "Using the Pomodoro technique, this feature breaks your study time into focused intervals with scheduled breaks — helping you maintain peak concentration without burnout. Perfect for students juggling multiple subjects or studying in busy environments.",
    },
    box4: {
      title: "Well-being & Break Reminders",
      image: FImage,
      content: "Real success is sustainable. Our well-being reminders encourage you to take healthy breaks, stretch, hydrate, or breathe — all built into your study flow. This supports your mental health and ensures you're not just studying harder, but smarter and healthier.",
    },
    box5: {
    title: "Virtual Flashcards with Spaced Repetition",
    image: FImage,
    content: "Flashcards are enhanced with AI-powered spaced repetition to help you memorize and retain information more effectively over time. Whether you're memorizing formulas, vocabulary, or historical facts, this method reinforces learning when it matters most — before you forget.",
    }
  };*/


  const FeaturesMobile = {
    box1: {
      title: "Adaptive Learning",
      mp4: MobileParallaxVid1,
      content: " Adjusts learning paths based on progress and needs. Adaptive learning tailored to your progress.",
    },
    box2: {
      title: "Smart Study Planner",
      mp4: MobileParallaxVid2,
      content: "Central to planning personalized schedules. Plan smarter with AI-powered schedules",
    },
    box3: {
      title: "Focus Mode with Pomodoro Timer",
      mp4: MobileParallaxVid3,
      content: "Stay focused with Pomodoro intervals. Time-based study sessions to enhance concentration.",
    },
    box4: {
      title: "Well-being & Break Reminders",
      mp4: MobileParallaxVid4,
      content: "Maintain balance with well-being reminders. Ensures mental health balance by scheduling breaks.",
    },
    box5: {
    title: "Virtual Flashcards with Spaced Repetition",
    mp4: MobileParallaxVid5,
    content: "Helps students retain knowledge effectively. Spaced repetition for long-term retention",
    }
  };


  const levels = {
    edu1: {
    title: "Students Preparing for Major Exams",
    content: "From WAEC and JAMB to JUPEB and university assessments, Mentora supports high school and tertiary-level students with smart revision tools, past questions, and tailored content aligned with national curricula.",
    },
    edu2: {
      title: "Self-Paced Learners Seeking Structure",
      content: "Learning at your own pace doesn’t mean going it alone. Mentora provides personalized study plans, adaptive feedback, and motivational nudges to help self-directed learners stay focused, organized, and on track.",
    },
    edu3: {
      title: "Students Who Struggle with Traditional Methods",
      content: "lectures and textbooks aren’t cutting it? Mentora offers a new way to learn. Through AI-driven explanations, visual aids, and interactive tools, we simplify complex topics and adapt to your unique learning style.",
    },
      edu4: {
      title: "Candidates Preparing to Perform at Their Best",
      content: "For those aiming for top scores, Mentora delivers advanced performance insights, real-time analytics, and intelligent revision strategies — turning data into action and helping you study smarter, not harder.",
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

  const imageList = [
    HeroSliderImg1,
    HeroSliderImg2,
    HeroSliderImg3,
    HeroSliderImg4,
    HeroSliderImg5,
  ];

  const accordionItems = [
    { title: 'What is Mentora?', content: 'A smart study companion that helps students stay organized, understand concepts, and stay motivated.' },
    { title: 'Can Mentora help me prepare for WAEC, JAMB, or JUPEB exams?', content: 'Yes! Mentora is designed to align with Nigeria’s academic standards, offering AI-enhanced revision tools, past questions, and targeted content for national exams.' },
    { title: 'Does Mentora replace teachers or tutors?', content: 'No. Mentora supports your learning but doesn’t replace teachers.' },
    { title: 'How is Mentora different from other study apps?', content: 'It adapts to your study style and combines organization, explanations, and motivation in one place.' },
    { title: 'How does Mentora support student well-being during study?', content: 'Our Focus Mode includes Pomodoro timers and built-in well-being reminders to encourage healthy study habits, regular breaks, and better mental balance.' },
  ];
  

  return (

    <>
      <Navigation/>
      <CustomCursor />
      <Popup
          openPopup={openDialogPopup}
          setOpenPopup={setOpenDialogPopup}
          title="Download APK"
          actions={
          <>
              <Button onClick={() => setOpenDialogPopup(false)} color="secondary">
              Cancel
              </Button>
          </>
          }
      >
          <p>This app is not yet available for Download. Please check back soon.</p>
      </Popup>

      <section className='Hero'>
          <div className="heroContainer">
              <h1> Adaptive, AI-driven study companion <br /> <span style={{color: 'blue'}}> {text}</span> <span><Cursor/></span>  </h1>
              <p>Join a learning platform dedicated to transforming the way students learn.</p>
          </div>
            <div className="heroCtaAccess"><span className='anchorTxt'>Get access to mentora App</span> <button onClick={() => {setOpenDialogPopup(true)}}><span className="btnTxt">Start free trial</span></button></div>
      </section>

      <section className="showcase">
        <ImageSlider images={imageList} />

        <div className="showcaseDesc">
          <img className='illustration autoShow' src={AiImg} alt="" />
          <div className="descTop">
            <h4>Personalized Experience</h4>
            <p>Our mission is to revolutionize education by delivering personalized, interactive, and efficient learning solutions that enable students globally to unlock their full potential.</p>
          </div>

          <div className="descImgContain autoShow">
            <video src={VideoTour} autoPlay loop></video>
          </div>

          <Counter targetNumber={1000} duration={3000}/>

          <ParallaxSection/>


          <div className="parallaxEffectMobile">
            <div className="parallaxScrollingInterection">
              <div className="parallaxLeft">
                {Object.keys(FeaturesMobile).map((key) => (
                  <div className="parallaxBox">
                  
                    <div className="PBoxTextCont" key={key}>
                      <h2>{FeaturesMobile[key].title}</h2>
                      <div className="boxSpacingBlock"></div>
                      <p>{FeaturesMobile[key].content}</p>
                    </div>

                    <div className="imgParallaxContain">
                      <video className='vid' src={FeaturesMobile[key].mp4} autoPlay loop preload='auto' muted></video>
                    </div>
                  
                </div>))}
              </div>
            </div>
          </div>
          

          <div className="lp-Grid">
          <h2 >Who is Mentora made for?</h2>
            <div className="pepBody" onMouseMove={handleMouseMove}>
                  <div className="pepBodyBottom">
                    {Object.keys(levels).map((key, index) => (
                      <div
                        className="pepBox"
                        key={key}
                        ref={(el) => (cardsRef.current[index] = el)}
                      >
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
        <h2 >FAQ</h2>
        <div className="knowImportanceContain">

          <Accordion items={accordionItems} />
          <div className="rightImgSegment">
            <img src={galaxyIllustration} alt="" />
          </div>
        </div>
      </section>

      <section className="mentoraPlan">
          <div className="planTxt autoShow">
            <div className="planTxtHeader">
              <h2>Mentora Plans</h2>
            </div>

            <div className="discountLabel">
              <label className="labelD">Discount - Coming soon</label>
            </div>
          </div>

          <div className="planPricing">
              <div className="pricingContainer">
                <div className="plan_inner">
                  <label>For individual</label>
                  <div className="innerTxt">
                    <div className="innerTxt_1">
                      <h6>Free</h6>
                      <p>Get access to a private tutor that transform your learning culture.</p>
                    </div>
                    <div className="innerTxt_2">
                      <div className="amount"><h6>$0</h6></div>
                      <span className="duration">/ month</span>
                    </div>
                    
                  </div>
                  <div className="subscribeBtn">
                    <div className="subscribeBtnInner">
                      <button>Create Account <MdOutlineArrowForward/></button>
                    </div>
                  </div>
                  <ul className="perks">
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Get access to an AI tutor</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Limited Upload (Files, images)</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Generate texts, solutions and Questions</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> And more...</li>
                  </ul>
                </div>
              </div>
              <div className="pricingContainer popular">
              <div class="popular_banner">
                <span class="normalWeight">Most popular</span>
                <FaRankingStar className='FaRankingStar'/>
                </div>
                <div className="plan_inner">
                  <label>Premium Subsciption</label>
                  <div className="innerTxt">
                    <div className="innerTxt_1">
                      <h6>PRO</h6>
                      <p>provide unlimited question generation, deeper performance insights, and expert-verified solutions.</p>
                    </div>
                    <div className="innerTxt_2">
                      <div className="amount"><h6>$14</h6></div>
                      <span className="duration">/ month, billed monthly or annualy</span>
                    </div>
                    
                  </div>
                  <div className="subscribeBtn">
                    <div className="subscribeBtnInner">
                      <button>Create Account <MdOutlineArrowForward/></button>
                    </div>
                  </div>
                  <ul className="perks">
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Everything included in Free</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Gamified learning</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> deeper performance insights</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Unlimited Custom Tutor Creation</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Exam Readiness Prep</li>
                  </ul>
                </div>
              </div>

              <div className="pricingContainer">
                <div className="plan_inner">
                  <label>For Institutions</label>
                  <div className="innerTxt">
                    <div className="innerTxt_1">
                      <h6>Institutional Partnerships </h6>
                      <p>Schools and tutoring centers can integrate Mentora as an official learning tool.</p>
                    </div>
                    
                  </div>
                  <div className="subscribeBtn">
                    <div className="subscribeBtnInner">
                      <button>Contact Sales <MdOutlineArrowForward/> </button>
                    </div>
                  </div>
                  <ul className="perks">
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Everything included in Pro</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Unlimited members</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Confidential mode</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Unlimited Database for study Research</li>
                  </ul>
                </div>
              </div>
          </div>
      </section>

      <Footer/>
      <BackToTopBtn/>
    </>
  )
}

export default App;