import React, {useState} from "react";
import './students.css'
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/Gemini_Generated_Image_91pjfc91pjfc91pj-removebg-preview.png";
import Icon1 from "./../assets/line-chart.gif";
import Icon2 from "./../assets/target.gif";
import Icon3 from "./../assets/award.gif";
import Icon4 from "./../assets/clock.gif";
import FeatureShow from "../assets/photo_2025-08-31_20-52-32.jpg";
import Navigation from "../navbar/navigation";
import Footer from "../../footer";
import BackToTopBtn from "../component";
import CustomCursor from "../navbar/Pages/customcursor";
import Popup from "./popup";
import { Button } from '@mui/material';



const Students = () => {

      const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedToolIndex, setSelectedToolIndex] = useState(0); // default to Tool 1
    const [animate, setAnimate] = useState(false);
    const [openDialogPopup, setOpenDialogPopup] = useState(false)
    const [openOtherPopup, setOpenOtherPopup] = useState(false);
    const [openDocPopup, setOpenDocPopup] = useState(false);

    const [openAiTutorPopup, setOpenAiTutorPopup] = useState(false);
    const [openQuestionGenPopup, setOpenQuestionGenPopup] = useState(false);
    const [openExamReadinessPopup, setOpenExamReadinessPopup] = useState(false);
    const [openStudyModesPopup, setOpenStudyModesPopup] = useState(false);
    const [openCustomTutorPopup, setOpenCustomTutorPopup] = useState(false);
    const [openGamificationPopup, setOpenGamificationPopup] = useState(false);

    const popupSetters = [
    setOpenAiTutorPopup,        // index 0
    setOpenQuestionGenPopup,    // index 1
    setOpenStudyModesPopup,     // index 2
    setOpenCustomTutorPopup,    // index 3
    setOpenExamReadinessPopup,  // index 4
    setOpenGamificationPopup    // index 5
    ];

    const handleToolSelect = (index) => {
        setAnimate(true); // trigger slide out
        setTimeout(() => {
            setSelectedToolIndex(index);
            setAnimate(false); // reset slide
            setIsPopupVisible(false); // close dropdown
        }, 300); // delay must match CSS transition
    };


      const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
      };

      const toolsData = [
        {
          name: "AI Tutor",
          title: "AI Tutor",
          heading: "Learning tutor, tailored to cater for your academic need",
          paragraph: "A virtual tutor is available 24/7 to answer questions, explain concepts, and provide step-by-step guidance",
        },
        {
          name: "Question Generation",
          title: "Question Generation",
          heading: "Instantly create tailored questions",
          paragraph: "create tailored questions on any topic. Whether you’re revising, testing your knowledge, or preparing for exams, our intelligent generator crafts high-quality, curriculum-aligned questions in seconds — so you spend more time learning and less time searching.",
        },
        {
          name: "Interactive Study Modes",
          title: "Interactive Study Modes",
          heading: "Turn studying into an active experience",
          paragraph: "With real-time feedback, step-by-step hints, and engaging question formats, our Interactive Study Mode keeps learners focused, motivated, and constantly improving through hands-on practice.",
        },
        {
          name: "Custom Tutor",
          title: "Custom Tutor",
          heading: "Get a personalized learning experience",
          paragraph: "Your own AI-powered tutor. It adapts to your learning pace, explains concepts in simple terms, and provides extra practice exactly where you need it most — like having a private tutor 24/7.",
        },
        {
          name: "Exam Readiness ",
          title: "Exam Readiness ",
          heading: "Be fully prepared when it matters most",
          paragraph: "Our Exam Readiness tool simulates real test environments, tracks your performance over time, and highlights weak spots so you can walk into your exams with confidence and clarity.",
        },
        {
          name: "Gamification ",
          title: "Gamification ",
          heading: "Learning doesn’t have to be boring",
          paragraph: "Earn points, unlock badges, climb leaderboards, and challenge friends while you study. Gamification turns your learning journey into a fun, competitive adventure that keeps you coming back for more.",
        },
      ];
      

      const AiSpec2 = {
        tool1: {
            title: "Title 1",
            headerTxt: "Your own personalized learning tutor, tailored to cater for your academic need",
            redirect: "/",
            text : "A virtual tutor is available 24/7 to answer questions, explain concepts, and provide step-by-step guidance",
        },

        tool2: {
            title: "Title 2",
            headerTxt: "Prove where your words came from",
            redirect: "/",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI. Enable Grammarly Authorship’s tracking in Microsoft Word and Google Docs to show your work.",
        },

        tool3: {
            title: "Title 3",
            headerTxt: "Prove where your words came from",
            redirect: "/",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI. Enable Grammarly Authorship’s tracking in Microsoft Word and Google Docs to show your work.",
        },

        tool4: {
            title: "Title 4",
            headerTxt: "Prove where your words came from",
            redirect: "/",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI. Enable Grammarly Authorship’s tracking in Microsoft Word and Google Docs to show your work.",
        }
      }

        const mvp = {
            mvp1 : {
                icon : Icon1,
                text : "Adaptive system that continuously monitors student’s progress, identifying weaknesses. ",
            },

            mvp2 : {
                icon : Icon2,
                text : "AI-powered scheduling and Pomodoro-based focus tools helping students build better study habits",
            },

            mvp3 : {
                icon : Icon3,
                text : "Instead of generic learning, Mentora adapts revision content to match student’s specific weak points",
            },

            mvp4 : {
                icon: Icon4,
                text : "Offering visual explanations, simplified breakdowns, and interactive content",
            }
        }; 

    return (
        <>
            <Navigation/>
            <CustomCursor/>
            <Popup
                openPopup={openDialogPopup}
                setOpenPopup={setOpenDialogPopup}
                title="Download APK"
                actions={
                <>
                    <Button onClick={() => setOpenDialogPopup(false)} color="secondary">
                    Got It!
                    </Button>
                </>
                }
            >
                <p>This app is not yet available for download. Please check back soon.</p>
            </Popup>

            <Popup
                openPopup={openOtherPopup}
                setOpenPopup={setOpenOtherPopup}
                title="Download for windows"
                actions={
                <Button variant="contained" color="success" onClick={() => setOpenOtherPopup(false)}>
                    Got It!
                </Button>
                }
            >
                <p>This app is not yet available for download. Please check back soon.</p>
            </Popup>

            <Popup
                openPopup={openDocPopup}
                setOpenPopup={setOpenDocPopup}
                title="Learn More"
                actions={
                <>
                    <Button onClick={() => setOpenDocPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p>You're One step ahead! The Documentation for this feature is coming soon. Thanks for your patience.</p>
            </Popup>

            <Popup
                openPopup={openAiTutorPopup}
                setOpenPopup={setOpenAiTutorPopup}
                title="AI TUTOR"
                actions={
                <>
                    <Button onClick={() => setOpenAiTutorPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p className='mvpPopupStyling'>The AI Tutor is your personal digital educator, designed to provide continuous support across all subjects. Unlike traditional tutoring, it adapts to your pace, knowledge level, and learning style in real time. The AI Tutor doesn’t just give answers <br/> 
                it explains concepts step by step, uses relatable examples, and checks for understanding before moving forward. Students can ask follow-up questions, request simplified explanations, or explore advanced applications depending on their curiosity.</p>
                <p className='mvpPopupStyling'>With 24/7 availability, the AI Tutor makes quality education accessible anytime and anywhere, ensuring learners never feel stuck or alone in their academic journey.</p>
            </Popup>

            <Popup
                openPopup={openQuestionGenPopup}
                setOpenPopup={setOpenQuestionGenPopup}
                title="QUESTIONS GENERATOR"
                actions={
                <>
                    <Button onClick={() => setOpenQuestionGenPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p className='mvpPopupStyling'>Our Question Generation feature turns any study material into an active learning experience. By analyzing textbooks, notes, or uploaded documents, the system instantly creates practice questions tailored to the learner’s level. Questions range from simple recall to application-based problems, critical reasoning, and scenario analysis.</p>
                <p className='mvpPopupStyling'>This ensures students are not only memorizing but also practicing higher-order thinking skills. The feature continuously adapts—making questions easier or harder based on performance—so learners are always challenged at the right level. It transforms passive reading into interactive practice, helping students retain more knowledge and prepare effectively for tests.</p>
            </Popup>

            <Popup
                openPopup={openStudyModesPopup}
                setOpenPopup={setOpenStudyModesPopup}
                title="INTERACTIVE STUDY MODE"
                actions={
                <>
                    <Button onClick={() => setOpenStudyModesPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p className='mvpPopupStyling'>Every learner is unique, and that’s why we offer Interactive Study Modes that match different preferences and subjects. Whether you prefer quick recall through flashcards, structured practice with quizzes, visual connections via mind maps, or immersive scenarios through simulations, this feature ensures studying never feels monotonous.</p>
                <p className='mvpPopupStyling'>Students can switch modes anytime to reinforce learning from multiple angles, improving both understanding and memory. For example, a science topic could be reviewed through diagrams, flashcards, and then tested in quiz form. These varied approaches create deeper engagement, reduce fatigue, and make complex topics easier to grasp.</p>
            </Popup>

            <Popup
                openPopup={openCustomTutorPopup}
                setOpenPopup={setOpenCustomTutorPopup}
                title="CUSTOM TUTORS"
                actions={
                <>
                    <Button onClick={() => setOpenCustomTutorPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p className='mvpPopupStyling'>The Custom Tutor empowers learners to shape their own educational experience by personalizing the teaching style to fit their needs. Students can select traits such as tone (patient, motivational, or strict), learning approach (visual, practical, or theoretical), and subject expertise.</p>
                <p className='mvpPopupStyling'>Imagine having a tutor who not only explains math formulas step by step but also uses real-life examples if you prefer practical learning. Or a tutor who uses storytelling to teach history. This flexibility makes learning more relatable and enjoyable while catering to different personalities. The Custom Tutor adapts over time, evolving with the learner’s progress and preferences.</p>
            </Popup>

            <Popup
                openPopup={openExamReadinessPopup}
                setOpenPopup={setOpenExamReadinessPopup}
                title="EXAMINATION READINESS"
                actions={
                <>
                    <Button onClick={() => setOpenExamReadinessPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p className='mvpPopupStyling'>With Exam Readiness, students can prepare with confidence using tools designed to simulate real test conditions. The system generates practice exams that mirror official formats, includes timed assessments, and provides instant feedback with detailed explanations. Performance analytics break down strengths and weaknesses, highlighting areas that need more focus.</p>
                <p className='mvpPopupStyling'>Students also receive personalized study plans and confidence scores that track progress over time. This approach ensures that learners go into exams not only well-prepared but also mentally ready. By reducing anxiety through practice and structure, Exam Readiness increases both performance and confidence on test day.</p>
            </Popup>

            <Popup
                openPopup={openGamificationPopup}
                setOpenPopup={setOpenGamificationPopup}
                title="Gamification"
                actions={
                <>
                    <Button onClick={() => setOpenGamificationPopup(false)} color="secondary">
                    Cancel
                    </Button>
                </>
                }
            >
                <p className='mvpPopupStyling'>The Gamification feature transforms learning into an exciting, game-like experience. Instead of treating study as a chore, students earn points, badges, and rewards for completing tasks, answering correctly, and staying consistent. Progress is tracked through levels, leaderboards, and challenges that encourage healthy competition among peers. Learners can also customize avatars and unlock achievements that reflect their academic journey.</p>
                <p className='mvpPopupStyling'>This approach boosts motivation, sustains engagement, and makes studying fun—even for tough subjects. By blending education with the joy of gaming, Gamification ensures students stay consistent and enjoy the process of continuous learning and self-improvement.</p>
            </Popup>



            <section className="studentsHero">
                <section className="studentCont">
                    <div className="firstContainer">
                        <h2>Improve Learning Outcomes with Targeted Preparation</h2>
                        <span>Improve how you learn and achieve more—just like millions of students around the world. </span>
                        <div className="DownloadBtn">
                            <button type="submit" id="Dapk" onClick={() => setOpenDialogPopup(true)}><span className="DapkFontStyle">Download</span> Apk</button>
                            <button type="submit" id="Dand" onClick={() => setOpenOtherPopup(true)}><span className="DapkFontStyle">Download</span> for windows</button>
                        </div>
                    </div>
                </section>

                <section className="mvpOutline">
                    {Object.keys(mvp).map((key) => (
                        <div className="mvpCont" key={key}>
                            <img className="icon" src={mvp[key].icon}></img>
                            <p className="mvpTxt">{mvp[key].text}</p>
                        </div>
                    ))}
                </section>
                
            </section>

            <section className="AiSpec">
                <div className="specHeader">
                    <h2>Fuel Your Exam Success with Consistent Progress and Powerful Study Features</h2>
                    <p>Elevate Your Academic Success with Data-Driven Learning Strategies!</p>
                </div>

                <div className="specBody">
                    <div className="specBodyTop">
                        <h4>{toolsData[selectedToolIndex].title}</h4>
                        <div className="specDrop">
                            <span onClick={togglePopup}>Next <IoIosArrowDown/></span>

                            {isPopupVisible && (
                                <div className="specDropDown">
                                {toolsData.map((tool, index) => (
                                <div key={index} onClick={() => handleToolSelect(index)}>
                                    {tool.name}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
                        
                    </div>

                    <div className={`specBodyCont ${animate ? 'slide-out' : 'slide-in'}`}>
                        <div className="bodyContLeft">
                            <h4>{toolsData[selectedToolIndex].heading}</h4>
                            <p>{toolsData[selectedToolIndex].paragraph}</p>
                            <span onClick={() => popupSetters[selectedToolIndex](true)}>Learn more</span>
                        </div>
                        <div className="bodyContRight">
                            <img src={FeatureShow} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="CtaSection">
                <div className="CtaSectionCont">
                    <div className="ctaRight">
                        <h2>Browse Documentation and turorial on how to use our tools efficiently</h2>
                        <p>Your Smart Companions for learning, designed to help you build and stick to powerful habits with features tailored to your unique needs.</p>
                        <button className="LearnMore" onClick={() => setOpenDocPopup(true)}>Learn more</button>

                    </div>
                </div>
            </section>
            <BackToTopBtn/>

            <Footer/>
        </>
    )
};

export default Students;
