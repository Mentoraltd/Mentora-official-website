//import { useState } from 'react'
import './App.css';
import HeroVideo from './assets/072224_UpdatedSection2_Stroke_2px.mp4' 
import Navigation from './navbar/navigation';
import Footer from '../footer';
import BackToTopBtn from './component';
import ImageSlider from './navbar/Pages/sliderVid';
import HeroSliderImg1 from "./assets/133797654164134163.jpg";
import HeroSliderImg2 from "./assets/133814580988668850.jpg";
import HeroSliderImg3 from "./assets/133856143719191035.jpg";
import HeroSliderImg4 from "./assets/133891128974884274.jpg";
import HeroSliderImg5 from "./assets/133900487904506222.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineArrowForward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import AiImg from "./assets/R-removebg-preview.png";
import BlurBg from "./assets/download (2).png";
import Accordion from './navbar/Pages/accordion';

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


  const FeaturesMobile = {
    box1: {
      title: "Adaptive Learning",
      mp4: HeroSliderImg1,
      content: " Adjusts learning paths based on progress and needs. Adaptive learning tailored to your progress.",
    },
    box2: {
      title: "Smart Study Planner",
      mp4: HeroSliderImg2,
      content: "Central to planning personalized schedules. Plan smarter with AI-powered schedules",
    },
    box3: {
      title: "Focus Mode with Pomodoro Timer",
      mp4: HeroSliderImg3,
      content: "Stay focused with Pomodoro intervals. Time-based study sessions to enhance concentration.",
    },
    box4: {
      title: "Well-being & Break Reminders",
      mp4: HeroSliderImg4,
      content: "Maintain balance with well-being reminders. Ensures mental health balance by scheduling breaks.",
    },
    box5: {
    title: "Virtual Flashcards with Spaced Repetition",
    mp4: HeroSliderImg5,
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

  const imageList = [
    HeroSliderImg1,
    HeroSliderImg2,
    HeroSliderImg3,
    HeroSliderImg4,
    HeroSliderImg5,
  ];

  const accordionItems = [
    { title: 'Section 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ad. Similique saepe laborum id illum odit fuga? Aliquid minus, praesentium, deleniti impedit alias consequatur in nihil magnam dolor qui sed.' },
    { title: 'Section 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ad. Similique saepe laborum id illum odit fuga? Aliquid minus, praesentium, deleniti impedit alias consequatur in nihil magnam dolor qui sed.' },
    { title: 'Section 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ad. Similique saepe laborum id illum odit fuga? Aliquid minus, praesentium, deleniti impedit alias consequatur in nihil magnam dolor qui sed.' },
  ];
  

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
        <ImageSlider images={imageList} />

        <div className="showcaseDesc">
          <img className='illustration autoShow' src={AiImg} alt="" style={{width: "300px", height: "300px"}} />
          <div className="descTop">
            <h4>Personalized Experience</h4>
            <p>To revolutionize the learning experience, we provide personalized,
            engaging, and efficient study tools that empower students worldwide
            to reach their full potential.</p>
          </div>

          <div className="descImgContain autoShow">

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

          <div className="parallaxEffectMobile">
            <div className="parallaxScrollingInterection">
              <div className="parallaxLeft">
                {Object.keys(FeaturesMobile).map((key) => (
                  <div className="parallaxBox">
                  
                    <div className="PBoxTextCont" key={key}>
                      <h2>{FeaturesMobile[key].title}</h2>
                      <div className="boxSpacingBlock"></div>
                      <p>{FeaturesMobile[key].content}</p>
                      <div className="boxSpacingBlock"></div>
                    </div>

                    <div className="imgParallaxContain">
                      <div className="imgParallax">{FeaturesMobile[key].mp4}</div>
                    </div>
                  
                </div>))}
              </div>
            </div>
          </div>
          

          <div className="lp-Grid">
          <h2 >Who is Mentora made for?</h2>
            <div className="pepBody">
              <div className="pepBodyTop">
                <h3>Highschool student</h3>
                <p>Ages 16–18, seeking help with managing study schedules and focus.</p>
              </div>

              <div className="pepBodyBottom">
                {Object.keys(levels).map((key) => (
                <div className="pepBox" key={key}>
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
        <h2 className='autoShow'>FAQ</h2>
        <div className="knowImportanceContain autoShow">

          <Accordion items={accordionItems} />
          <div className="rightImgSegment"></div>
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
                      <p>Get peace of mind with writing that’s mistake-free.</p>
                    </div>
                    <div className="innerTxt_2">
                      <div className="amount"><h6>$0</h6>USD</div>
                      <span className="duration">/ month</span>
                    </div>
                    
                  </div>
                  <div className="subscribeBtn">
                    <div className="subscribeBtnInner">
                      <button>Create Account <MdOutlineArrowForward/></button>
                    </div>
                  </div>
                  <ul className="perks">
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Write without mistakes</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> See your writing tone</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Generate text with 100 AI prompts</li>
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
                      <div className="amount"><h6>$14</h6>USD</div>
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
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> unlimited question generation</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> deeper performance insights</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> expert-verified solutions</li>
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
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Data loss prevention</li>
                    <li className="perksList"><FaRegCircleCheck className='FaRegCircleCheck' /> Unlimited generative AI prompts</li>
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

export default App
