import React, {useState} from "react";
import './students.css';
import './institution.css';
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import Icon1 from "./../assets/icon (1).svg";
import Icon2 from "./../assets/icon (2).svg";
import Icon3 from "./../assets/icon.svg";
import Icon4 from "./../assets/Group_48096212.svg";
import FeatureShow from "../assets/mentora hard problem.png";
import Navigation from "../navbar/navigation";
import { AccordionInstitution } from "../navbar/Pages/accordion";
import Footer from "../../footer";



const Institution = () => {

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
      

      const solutionFeatures = {
        tool1: {
            img: Icon1,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },

        tool2: {
            img: Icon2,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
        tool3: {
            img: Icon3,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
        tool4: {
            img: Icon4,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
      }

      const solutionFeaturesRight = {
        tool1: {
            img: Icon1,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },

        tool2: {
            img: Icon2,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
        tool3: {
            img: Icon3,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
        tool4: {
            img: Icon4,
            headerTxt: "Prove where your words came from",
            text : "Automatically label your text sources as typed by you, copied from a source, or created with AI.",
        },
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

    const accordionItems = [
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis error deserunt, illum tenetur quas!' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ad. Similique saepe laborum id illum odit fuga? Aliquid minus, praesentium, deleniti impedit alias consequatur in nihil magnam dolor qui sed.' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis error deserunt, illum tenetur quas!' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis error deserunt, illum tenetur quas!' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis error deserunt, illum tenetur quas!' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis error deserunt, illum tenetur quas!' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis facilis error deserunt, illum tenetur quas!' },
      ];

    return (
        <>
            <Navigation/>

            <section className="studentsHero">
                <section className="studentCont">
                    <div className="firstContainer">
                        <h2>Boost Your Grades With Better Learning Practice and Prep Aid</h2>
                        <span>Join the millions of students worldwide to improve your learning practices and achieve your goals. </span>
                        <div className="DownloadBtn">
                            <button type="submit" id="Dapk">Contact Education Sales</button>
                        </div>
                    </div>
                    <div className="secondContainer">
                        <img src={ArticleImg1} alt="" />
                    </div>
                </section>

                <section className="I-mvpOutline">
                    {Object.keys(mvp).map((key) => (
                        <div className="mvpContainer" key={key}>
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

            <section className="solutionOulines">
                <div className="SO-header">
                    <h2>Game Changer for Institution </h2>
                    <p>Intelligent features designed to improve communication across your organization.</p>
                </div>

                <div className="SO-body">
                    <div className="SO-bodyLeftContainer">
                        {Object.keys(solutionFeatures).map((key) => (
                            <div className="SO-ContainerBox" key={key}>
                                <img src={solutionFeatures[key].img} alt="" />
                                <h4>{solutionFeatures[key].headerTxt}</h4>
                                <p>{solutionFeatures[key].text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="SO-bodyRightContainer">
                    {Object.keys(solutionFeaturesRight).map((key) => (
                            <div className="SO-ContainerBox" key={key}>
                                <img src={solutionFeaturesRight[key].img} alt="" />
                                <h4>{solutionFeaturesRight[key].headerTxt}</h4>
                                <p>{solutionFeaturesRight[key].text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="SO-faq">
                <div className="SO-faqHeader">
                    <h2>Frequently Asked Question</h2>
                </div>

                <AccordionInstitution items={accordionItems} />
                
            </section>

            <Footer/>
        </>
    )
};

export default Institution;
