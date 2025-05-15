import React from "react";
import "./updateLog.css";
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/133814580988668850.jpg";



export const NewsAndInsight = () => {
        const newsAndInsight = {
            top1 : {
                label: "Pomodoro-Timer",
                title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.",
                body : "Random Text Generator is a web application which provides true random text which you can use in your documents or web designs. How does it work? First we took many books available on project Gutenberg and stored their contents in a database.",
                articleImg : ArticleImg1,
                authorImg : ArticleImg1,
                authorName : "Sophia Martin",
                publishDate: "April 27, 2025"
            },
    
            top2 : {
                label: "AI-TUTOR",
                title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.",
                body : "The algorithm takes care to create text that looks similar to an ordinary book but without any real meaning. The reason we want our text to be meaningless is that we want the person.",
                articleImg : ArticleImg1,
                authorImg : ArticleImg1,
                authorName : "Ethan Taylor",
                publishDate: "April 27, 2025"
            },
    
            top3 : {
                label: "FLASHCARDS",
                title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.",
                body : "Lorem ipsum is the most common form of Greeking. However more and more people are sick and tired of using the same sample text over and over again. Also lorem ipsum is in latin.",
                articleImg : ArticleImg1,
                authorImg : ArticleImg1,
                authorName : "Isabella Johnson",
                publishDate: "April 27, 2025"
            },

            top4 : {
                label: "Pomodoro-Timer",
                title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.",
                body : "Random Text Generator is a web application which provides true random text which you can use in your documents or web designs. How does it work? First we took many books available on project Gutenberg and stored their contents in a database.",
                articleImg : ArticleImg1,
                authorImg : ArticleImg1,
                authorName : "Sophia Martin",
                publishDate: "April 27, 2025"
            },
    
            top5 : {
                label: "AI-TUTOR",
                title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.",
                body : "The algorithm takes care to create text that looks similar to an ordinary book but without any real meaning. The reason we want our text to be meaningless is that we want the person.",
                articleImg : ArticleImg1,
                authorImg : ArticleImg1,
                authorName : "Ethan Taylor",
                publishDate: "April 27, 2025"
            },
    
            top6 : {
                label: "FLASHCARDS",
                title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.",
                body : "Lorem ipsum is the most common form of Greeking. However more and more people are sick and tired of using the same sample text over and over again. Also lorem ipsum is in latin.",
                articleImg : ArticleImg1,
                authorImg : ArticleImg1,
                authorName : "Isabella Johnson",
                publishDate: "April 27, 2025"
            }
    
        }

    return(
        <>
            <section className="newsAndInsight">
                <div className="NI-Header">
                    <h6>News & insights</h6>
                    <span>See more articles <IoIosArrowDown className="lpArrowRight"/></span>
                </div>

                <div className="NI-body">
                    {Object.keys(newsAndInsight).map((key) => (
                        <div className="ni-bodyContainer" key={key}>
                            <div className="articleImg">
                                <img src={newsAndInsight[key].articleImg} alt="" />
                            </div>
                            <div className="ni-bodyTxt">
                                <div className="label">{newsAndInsight[key].label}</div>
                                <h6>{newsAndInsight[key].title}</h6>
                                <p>{newsAndInsight[key].body}</p>
                                <div className="ni-bodyDate">
                                    <span className="publishDate"> {newsAndInsight[key].publishDate}</span>
                                </div>
                            </div>
                        </div>))}
                </div>
            </section>
        </>
    )
};


export const ErrorPage = () => {
    return(
        <>
            <section className="error">
                <h2>404 PAGE ERROR</h2>
            </section>
        </>
    )
}




const UpdateLog = () => {

    const LatestUpdateLog = {
        latest : {
            title: "Coming Soon!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam.",
            date : "April 27th 2025",
        },

        Update26th : {
            title: "Coming Soon!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam.",
            date : "April 26th 2025"
        },

        Update25th : {
            title : "Coming Son!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam.",
            date : "April 25th 2025"
        },

        Update24th: {
            title : "Coming Soon!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam.",
            date : "April 24th 2025",
        },
    }

  return (
    <>
        <section className="versionLog">
            <div className="logHeader">
                <h6>Updates</h6>
                <span>view all changes <IoIosArrowDown className="lpArrowRight"/></span>
            </div>


                <div className="logBody">
                {Object.keys(LatestUpdateLog).map((key) => (
                    <div className="logBodyCont" key={key}>
                        <div className="logTxtBox">{LatestUpdateLog[key].title}</div>
                        <span className="logDate">{LatestUpdateLog[key].date}</span>
                    </div>
                ))}
                </div>
        </section>
    </>
  )
};

export default UpdateLog;
