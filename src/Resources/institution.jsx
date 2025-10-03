import React, {useState} from "react";
import './students.css';
import './institution.css';
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/photo_2025-08-31_20-52-26-removebg-preview.png";
import Icon1 from "./../assets/icon (1).svg";
import Icon2 from "./../assets/icon (2).svg";
import Icon3 from "./../assets/icon.svg";
import Icon4 from "./../assets/Group_48096212.svg";
import FeatureShow from "../assets/28.05.2025_09.02.23_REC.png";
import Navigation from "../navbar/navigation";
import CustomCursor from "../navbar/Pages/customcursor";
import { AccordionInstitution } from "../navbar/Pages/accordion";
import Footer from "../../footer";
import BackToTopBtn from "../component";



const Institution = () => {
      

      const solutionFeatures = {
        tool1: {
            img: Icon1,
            headerTxt: "Digital Transformation Support:",
            text : "Schools and universities can leverage Mentora as a blended learning tool, reducing strain on faculty while boosting accessibility for students.",
        },

        tool2: {
            img: Icon2,
            headerTxt: "Student–Institution Communication",
            text : "Students gain direct access to AI tutors trained on their school’s curriculum, making learning more personalized and relevant.",
        },
        tool3: {
            img: Icon3,
            headerTxt: "Teacher–Student Communication",
            text : "Faculty can integrate their notes, explanations, and examples into Mentora, allowing students to receive AI-driven guidance that mirrors classroom instruction.",
        },

                tool4: {
            img: Icon1,
            headerTxt: "Institution–Mentora Communication",
            text : "Institutions receive actionable insights on student learning patterns, strengths, and areas for improvement, enabling data-driven decisions.",
        },

        tool5: {
            img: Icon2,
            headerTxt: "Cross-Campus Collaboration",
            text : "Universities and schools can partner with Mentora to foster research, digital innovation, and AI-powered blended learning models.",
        }
      }

    const mvp = {
        mvp1 : {
            icon : Icon1,
            text : "Curriculum Integration: Adapt AI tutors to deliver content based on the institution’s syllabus.",
        },

        mvp2 : {
            icon : Icon2,
            text : "Assessment Alignment: Generate practice questions and mock exams in the same format students encounter in their school or university assessments.",
        },

        mvp3 : {
            icon : Icon3,
            text : "Research and Innovation Collaboration: Universities can collaborate with Mentora to explore how AI-driven education impacts pedagogy, inclusivity, and academic outcomes.",
        },

        mvp4 : {
            icon: Icon4,
            text : "Learning Analytics for Educators: Institutions gain access to insights on student engagement, performance gaps, and progression patterns to inform teaching strategies.",
        }
    }; 

    const accordionItems = [
        { title: 'What is the Mentora Institutional Partnership Program?', content: 'The Mentora Institutional Partnership Program allows schools, colleges, and universities to collaborate with Mentora so our AI tutor can be trained to align with their syllabus, teaching style, and academic objectives. This ensures students receive personalized learning support that matches the institution’s curriculum.' },
        { title: 'How does partnering with Mentora benefit our institution?', content: 'Provide data-driven insights into student progress, Improve communication across departments and with students, Reduce teacher workload through automated support, Enhance student success rates by improving exam readiness' },
        { title: 'Can Mentora adapt to our unique teaching style and curriculum?', content: 'Yes. We work closely with institutions to upload, structure, and integrate their syllabus into Mentora. The AI tutor then adapts its explanations, examples, and practice questions to reflect the way your institution teaches and assesses students.' },
        { title: 'Is student data secure when partnering with Mentora?', content: 'Absolutely. Data security and privacy are top priorities. Institutions maintain control over what data is shared, and all information is stored securely with full compliance to data protection standards.' },
        { title: 'What makes Mentora a game changer for institutions?', content: 'Mentora’s intelligent features not only support students but also strengthen institutional communication and teaching efficiency. With syllabus alignment, AI-driven insights, and customizable learning paths, Mentora enables schools and universities to modernize their teaching while improving student engagement and results.' },
        { title: 'What kind of training or onboarding is required for staff?', content: 'We provide a seamless onboarding process. Institutions receive training sessions for faculty and student orientation modules to ensure everyone understands how to use the platform effectively.' },
        { title: 'Can Mentora help reduce exam anxiety and improve results?', content: 'Yes. By simulating real exam conditions, tracking performance, and providing personalized study plans, Mentora helps students feel more confident and prepared — ultimately improving institutional performance metrics.' },
      ];

    return (
        <>
            <Navigation/>
            <CustomCursor/>

            <section className="studentsHero">
                <section className="studentCont">
                    <div className="firstContainer">
                        <h2>Institution Collaboration</h2>
                        <span>Mentora allows schools, colleges, and universities to collaborate with us to unlock the full potential of AI-powered learning. Institutions can directly reach out to us to co-create a customized AI tutor ecosystem tailored to their unique curriculum, teaching style, and academic goals. </span>
                        <div className="DownloadBtn">
                            <button type="submit" id="Dapk"><a href="mailto:mentoraltd@gmail.com">Contact Sales </a> </button>
                        </div>
                    </div>
                </section>

                <p className="institutionDesc">By partnering with Mentora, institutions gain the ability to train our AI models to understand and align with their syllabus, grading patterns, and pedagogical approaches. This ensures that students receive guidance that mirrors the exact way their teachers explain concepts, making AI a natural extension of the classroom rather than a disconnected tool.</p>

                <section className="I-mvpOutline">
                    {Object.keys(mvp).map((key) => (
                        <div className="mvpContainer" key={key}>
                            <img className="icon" src={mvp[key].icon}></img>
                            <p className="mvpTxt">{mvp[key].text}</p>
                        </div>
                    ))}
                </section>
                
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
                                <h4>{solutionFeatures[key].headerTxt}</h4>
                                <p>{solutionFeatures[key].text}</p>
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

            <BackToTopBtn/>

            <Footer/>
        </>
    )
};

export default Institution;
