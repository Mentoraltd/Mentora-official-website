import React from "react";
import './blog.css'
import Navigation from "../navbar/navigation";
import Footer from "../../footer";
import BackToTopBtn from "../component";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import { IoIosArrowDown } from "react-icons/io";
import UpdateLog from "./updatesLog";
import { NewsAndInsight } from "./updatesLog";

const Blogs = () => {
    
    const TopArticle = {
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
        }

    }


  return (
    <>
      <Navigation />

      <section className="blogHero">
        <div className="topBlogArticle">
            <div className="BheroLeft">
                <div className="BheroLeftContainer">
                    <div className="articleImg">
                        <img src={ArticleImg1} alt="" />
                    </div>
                    
                    <div className="BheroTextContainer">
                        <span className="label">Pomodoro-Timer</span>
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, dolorum.</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dignissimos illum nihil eaque. Magnam exercitationem odio tenetur accusantium nobis voluptas aliquam, a officia necessitatibus. At quos eligendi praesentium. Eum unde odio ipsa eaque minus illum at veritatis animi molestiae ab.</p>

                    </div>
                    <div className="BheroAuthor">
                        <span className="authorImg">
                            <img src={ArticleImg1} alt="" />
                        </span>
                        <span className="authorName">Tyler Mcalter</span>
                        <span className="publishDate">| April 27, 2025</span>
                    </div>
                </div>
            </div>
            <div className="BheroRight">
                {Object.keys(TopArticle).map((key) => (
                    <div className="BheroRightContainer" key={key}>
                        <div className="articleImg">
                            <img src={TopArticle[key].articleImg} alt="" />
                        </div>
                        <div className="BheroRightTxt">
                            <div className="label">{TopArticle[key].label}</div>
                            <h6>{TopArticle[key].title}</h6>
                            <p>{TopArticle[key].body}</p>
                            <div className="BheroAuthor">
                                <span className="authorName">{TopArticle[key].authorName}</span>
                                <span className="publishDate">| {TopArticle[key].publishDate}</span>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>

        <div className="recieveNewsLetter">
            <div className="leftNewsText">
                <h4>Want to recieve Updates and News from Us?</h4>
                <p>Discover tips, technical guides, and best practices in our weekly Newsletter.</p>
            </div>
            <div className="rightNewsForm">
                <form action="" method="post">
                    <label htmlFor="email">
                        <input type="email" name="email" id="NewsletterEmail" placeholder="Your email address" />
                        <button type="submit" className="NewsSubmitBtn">Subscribe <IoIosArrowDown className="IoIosArrowDown"/> </button>
                    </label>

                    <div className="sendNewsletter">
                        <input type="checkbox" name="check" id="NewsletterPermissionCheckbox" />
                        <p>Yes please, I’d like MentoraLtd to use my information for personalized communications, targeted advertising and campaign effectiveness. See <span>MentoraLtd Privacy Statement</span> for more details.</p>
                    </div>
                    
                </form>
            </div>
        </div>
      </section>

      <section className="latest-popular">
            <div className="lpContainer">
                <hr />
                <div className="lpHeader">
                    <h6>Latest</h6>
                    <span>View All <IoIosArrowDown className="lpArrowRight"/></span>
                </div>

                <div className="lpBody">
                    {Object.keys(TopArticle).map((key) => (
                        <div className="BheroRightContainer" key={key}>
                            <div className="articleImg">
                                <img src={TopArticle[key].articleImg} alt="" />
                            </div>
                            <div className="BheroRightTxt">
                                <div className="label">{TopArticle[key].label}</div>
                                <h6>{TopArticle[key].title}</h6>
                                <p>{TopArticle[key].body}</p>
                                <div className="BheroAuthor">
                                    <span className="authorName">{TopArticle[key].authorName}</span>
                                    <span className="publishDate">| {TopArticle[key].publishDate}</span>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>

            <div className="lpContainer">
                <hr />
                <div className="lpHeader">
                    <h6>Popular</h6>
                    <button className="filter">Trending Now <IoIosArrowDown className="lpArrowRight"/></button>
                </div>

                <div className="lpBody">
                    {Object.keys(TopArticle).map((key) => (
                        <div className="BheroRightContainer" key={key}>
                            <div className="articleImg">
                                <img src={TopArticle[key].articleImg} alt="" />
                            </div>
                            <div className="BheroRightTxt">
                                <div className="label">{TopArticle[key].label}</div>
                                <h6>{TopArticle[key].title}</h6>
                                <p>{TopArticle[key].body}</p>
                                <div className="BheroAuthor">
                                    <span className="authorName">{TopArticle[key].authorName}</span>
                                    <span className="publishDate">| {TopArticle[key].publishDate}</span>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
      </section>
                        
      <section className="bannerArticle">
        <UpdateLog/>
      </section>

      
      <NewsAndInsight/>

      <Footer/>

      <BackToTopBtn/>

    </>
  )
};

export default Blogs;