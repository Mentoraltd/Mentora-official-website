import { useEffect, useState } from 'react'
import './blog.css'
import Navigation from "../navbar/navigation";
import Footer from "../../footer";
import BackToTopBtn from "../component";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import { IoIosArrowDown } from "react-icons/io";
import UpdateLog from "./updatesLog";
import { NewsAndInsight } from "./updatesLog";
import CustomCursor from "./../navbar/Pages/customcursor";
import { supabase } from "../lib/superbase";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);


  useEffect(() => {
    const fetchBlogs = async () => {
        let { data, error } = await supabase
            .from("blog")
            .select("*")
            .eq("status", "Published")
            .order("datepublished", { ascending: false });

        if (error) {
            console.error("Supabase error:", error);
        } else {
            console.log("Fetched blogs:", data);
            setBlogs(data || []);
        }
        };

        fetchBlogs();
    }, []);
    

    if (!blogs || blogs.length === 0) {
        return <p>Loading Blogs...</p>;
    }

    const [firstBlog, ...otherBlogs] = blogs;


  return (
    <>
      <Navigation />
      <CustomCursor/>

      <section className="blogHero">
        <div className="topBlogArticle">
            {/* Left side - first blog */}
            {firstBlog && (
                <div className="BheroLeft">
                <div className="BheroLeftContainer">

                    <div className="articleImg">
                    <img
                        src={firstBlog.coverimage || "/placeholder.jpg"}
                        alt={firstBlog.title}
                    />
                    </div>
                    <div className="BheroTextContainer">
                    <span className="label">{firstBlog.tag} <span className='readArticle' onClick={() => setSelectedBlog(firstBlog)}
                    style={{ cursor: 'pointer' }}>Read Article</span></span>

                    <h4>{firstBlog.title}</h4>
                    <p>{firstBlog.summary}</p>
                    </div>
                    <div className="BheroAuthor">
                    <span className="authorImg">
                        <img
                        src={firstBlog.coverimage || "/placeholder.jpg"}
                        alt={firstBlog.author}
                        />
                    </span>
                    <span className="authorName">{firstBlog.author}</span>
                    <span className="publishDate">
                        |{" "}
                        {firstBlog.datepublished
                        ? new Date(firstBlog.datepublished).toLocaleDateString()
                        : ""}
                    </span>
                    </div>
                </div>
                </div>
            )}

            {/* Right side - other blogs */}
            <div className="BheroRight">
                {otherBlogs.map((blog) => (
                <div
                    className="BheroRightContainer"  key={blog.id}>
                    
                    <div className="articleImg">
                    <img
                        src={blog.coverimage || "/placeholder.jpg"}
                        alt={blog.title}
                    />
                    </div>
                    <div className="BheroRightTxt">
                    <div className="label">{blog.tag} <span className='readArticle' onClick={() => setSelectedBlog(blog)}
                style={{ cursor: 'pointer' }}>Read Article</span></div>
                    <h6>{blog.title}</h6>
                    <p>{blog.summary}</p>
                    <div className="BheroAuthor">
                        <span className="authorName">{blog.author}</span>
                        <span className="publishDate">
                        |{" "}
                        {blog.datepublished
                            ? new Date(blog.datepublished).toLocaleDateString()
                            : ""}
                        </span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="recieveNewsLetter">
            <div className="leftNewsText">
                <h4>Want to recieve Updates and News from Us?</h4>
                <p>Discover tips, technical guides, and best practices in our weekly Newsletter.</p>
            </div>
            <div className="rightNewsForm">
                <form name="newsletter" netlify>
                        <input type="email" name="email" id="NewsletterEmail" placeholder="Your email address" />
                        <button type="submit" className="NewsSubmitBtn">Subscribe <IoIosArrowDown className="IoIosArrowDown"/> </button>
                    
                </form>
            </div>
        </div>

        {selectedBlog && (
            <div className="modalOverlay" onClick={() => setSelectedBlog(null)}>
                <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <button className="closeBtn" onClick={() => setSelectedBlog(null)}>×</button>
                
                <div className="modalHeader">
                    <h2>{selectedBlog.title}</h2>
                    <span className="modalMeta">
                    By {selectedBlog.author} |{" "}
                    {selectedBlog.datepublished
                        ? new Date(selectedBlog.datepublished).toLocaleDateString()
                        : ""}
                    </span>
                </div>

                <div className="modalBody">
                    <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                </div>
                </div>
            </div>
            )}

    </section>

    {/* All blog and Article list with pagination */}
    <NewsAndInsight/>


    <section className="bannerArticle">
        <UpdateLog/> 
        
    </section>

    <Footer/>

    <BackToTopBtn/>

    </>
  )
};

export default Blogs;


