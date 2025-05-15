import React, {useState} from "react";
import './students.css'
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import Icon1 from "./../assets/icon (1).svg";
import Icon2 from "./../assets/icon (2).svg";
import Icon3 from "./../assets/icon.svg";
import Icon4 from "./../assets/Group_48096212.svg";
import FeatureShow from "../assets/mentora hard problem.png";
import Navigation from "../navbar/navigation";
import Footer from "../../footer";



const Students = () => {

      const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedToolIndex, setSelectedToolIndex] = useState(0); // default to Tool 1
    const [animate, setAnimate] = useState(false);


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
          heading: "Prove where your words came from",
          paragraph: "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
        {
          name: "Smart Assistant",
          title: "Smart Assistant",
          heading: "Boost your writing speed",
          paragraph: "With smart suggestions and context awareness, write better and faster across platforms.",
        },
        {
          name: "Plagiarism Checker",
          title: "Plagiarism Checker",
          heading: "Detect originality instantly",
          paragraph: "Scan for duplicate content and ensure authenticity in your written documents.",
        },
        {
          name: "Grammar Coach",
          title: "Grammar Coach",
          heading: "Improve sentence clarity",
          paragraph: "Real-time grammar and style suggestions tailored for professional writing.",
        },
      ];
      

      const AiSpec2 = {
        tool1: {
            title: "Title 1",
            headerTxt: "Prove where your words came from",
            redirect: "/",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI. Enable Grammarly Authorship’s tracking in Microsoft Word and Google Docs to show your work.",
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
            text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo corporis at autem voluptate id perspiciatis laborum, eum nisi voluptates provident.",
        },

        mvp2 : {
            icon : Icon2,
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi possimus nisi aperiam sapiente nemo saepe nihil id voluptates tempore deleniti.",
        },

        mvp3 : {
            icon : Icon3,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo fugiat, ex tempora ipsam officiis repellat blanditiis ullam natus omnis?",
        },

        mvp4 : {
            icon: Icon4,
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur nesciunt deleniti accusamus optio laborum alias vero unde fuga ut.",
        }
    }; 

    return (
        <>
            <Navigation/>

            <section className="studentsHero">
                <section className="studentCont">
                    <div className="firstContainer">
                        <h2>Boost Your Grades With Better Learning Practice and Prep Aid</h2>
                        <span>Join the millions of students worldwide to improve your learning practices and achieve your goals. </span>
                        <div className="DownloadBtn">
                            <button type="submit" id="Dapk"><span className="DapkFontStyle">Download</span> Apk</button>
                            <button type="submit" id="Dand"><span className="DapkFontStyle">Download</span> for windows</button>
                        </div>
                    </div>
                    <div className="secondContainer">
                        <img src={ArticleImg1} alt="" />
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
                    <h2>Get win streak of exam success brewed by improved learning progression</h2>
                    <p>Mentora features helps you prepare for different form of examination.  Academic Progress has never been easier to achieve.</p>
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
                            <span>Learn more</span>
                        </div>
                        <div className="bodyContRight">
                            <img src={FeatureShow} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="AiSpec">
                <div className="specHeader">
                    <h2>Get win streak of exam success brewed by improved learning progression</h2>
                    <p>Mentora features helps you prepare for different form of examination.  Academic Progress has never been easier to achieve.</p>
                </div>

                <div className="specBody">
                    <div className="specBodyTop">
                        <h4>Ai Tutor</h4>
                        <div className="specDrop">
                            <span onClick={togglePopup}>Next <IoIosArrowDown/></span>

                            {isPopupVisible && (
                            <div className="specDropDown">
                                <div>tool 1</div>
                                <div>tool 2</div>
                                <div>tool 3</div>
                                <div>tool 4</div>
                            </div>)}
                        </div>
                        
                    </div>

                    <div className="specBodyCont">
                        <div className="bodyContLeft">
                            <h4>Prove where your words came from</h4>
                            <p>Automatically label your text sources as typed by you, copied from a source, or created with AI. Enable Grammarly Authorship’s tracking in Microsoft Word and Google Docs to show your work.</p>
                            <span>Learn more</span>
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
                        <h2>Browse Our AI resources for Students</h2>
                        <p>Your Smart Companions for learning, designed to help you build and stick to powerful habits with features tailored to your unique needs.</p>
                        <button className="LearnMore">Learn more</button>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
};

export default Students;
