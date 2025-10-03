import React from "react";
import "./learn-demo.css";
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import BannerImg1 from "../assets/Gemini_Generated_Image_5flm3v5flm3v5flm.jpeg";
import BannerImg2 from "../assets/f0383a37193dfc4ba83375708d1cd901.jpg";
import BannerImg3 from "../assets/ai-circuit-board-innovation_1077802-56750.jpg";
import BannerImg4 from "../assets/28.05.2025_09.02.58_REC.png";
import DemoVideo from "../assets/video_2025-09-01_21-43-53.mp4";
import Navigation from "../navbar/navigation";
import Footer from "../../footer";
import CustomCursor from "../navbar/Pages/customcursor.jsx";
import { Cursor } from "react-simple-typewriter";



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
            <CustomCursor/>

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
