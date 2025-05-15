import React from "react";
import "./learn-demo.css";
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import BannerImg1 from "../assets/R.jpeg";
import BannerImg2 from "../assets/High-tech background with AI-inspired elements, futuristic lines, neural network visuals.png";
import BannerImg3 from "../assets/Gemini_Generated_Image_674p7n674p7n674p.jpeg";
import BannerImg4 from "../assets/OIP.jpeg";
import DemoVideo from "../assets/mentora-web-vid.mp4";
import Navigation from "../navbar/navigation";
import Footer from "../../footer";



const Learn = () => {
    const SpItems = {
        videoLink1 : {
            bannerImg: BannerImg1,
            caption: "Making use of the Ai tutor feature in mentora like a PRO"
        },
        videoLink2 : {
            bannerImg: BannerImg2,
            caption: "Making use of the Ai tutor feature in mentora like a PRO"
        },
        videoLink3 : {
            bannerImg: BannerImg3,
            caption: "Making use of the Ai tutor feature in mentora like a PRO"
        },
        videoLink4 : {
            bannerImg: BannerImg4,
            caption: "Making use of the Ai tutor feature in mentora like a PRO"
        },
    }


    return (
        <>
            <Navigation/>

            <section className="officialDemo">
                <div className="demoTxt">
                    <h4>Finding it hard to Navigate Mentora App?</h4>
                    <p>Don't worry we got you, checkout this video tutorial crafted to help you understand mentora interface</p>
                </div>

                <video className="videoMain" controls>
                    <source
                    src={DemoVideo}
                    alt="Mentora Application Demo Tutorial Of Mvp Features"
                    type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </section>

            <section className="suggestedPlaylist">
                <h4>Suggested Videos</h4>

                <div className="playlistContainer">
                    {Object.keys(SpItems).map((key) => (
                        <div className="SuggestedContainer" key={key}>
                            <img src={SpItems[key].bannerImg} alt="" />
                            <span>{SpItems[key].caption}</span>
                        </div>
                    ))}
                </div>
                
                
            </section>

            <Footer/>
        </>
    )
};

export default Learn;
