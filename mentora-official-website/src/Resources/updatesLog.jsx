import { useEffect, useState } from 'react'
import "./updateLog.css";
import { IoIosArrowDown } from "react-icons/io";
import ArticleImg1 from "../assets/133814580988668850.jpg";
import { supabase } from "../lib/superbase";
import { Link } from 'react-router-dom';



export const NewsAndInsight = () => {
    const [newsAndInsight, setNewsAndInsights] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedNews, setSelectedNews] = useState(null);
    const pageSize = 8; // show 8 per page

        useEffect(() => {
            const fetchNews = async () => {
                let { data, error } = await supabase
                    .from("news_and_insights")
                    .select("*")
                    .eq("status", "Published")
                    .order("datepublished", { ascending: false });

                if (error) {
                    console.error("Supabase error:", error);
                } else {
                    console.log("Fetched News and insights:", data);
                    setNewsAndInsights(data || []);
                }
                };

                fetchNews();
            }, []);

            if (!newsAndInsight || newsAndInsight.length === 0) {
                return <p>No News yet.</p>;
            };


        // Pagination logic
        const totalPages = Math.ceil(newsAndInsight.length / pageSize);
        const startIndex = (currentPage - 1) * pageSize;
        const selectedItems = newsAndInsight.slice(startIndex, startIndex + pageSize);


    return (
        <section className="newsAndInsight">
        <div className="NI-Header">
            <h6>News & Insights</h6>
            <span>
            See more articles <IoIosArrowDown className="lpArrowRight" />
            </span>
        </div>

        <div className="NI-body">
            {selectedItems.map((item) => (
            <div className="ni-bodyContainer" key={item.id}>
                <div className="articleImg">
                <img
                    src={item.coverimage || "/placeholder.jpg"}
                    alt={item.title}
                />
                </div>
                <div className="ni-bodyTxt">
                <div className="label">{item.tag} <span className='readArticle' onClick={() => setSelectedNews(item)}
                style={{ cursor: 'pointer' }}>Read Article</span></div>
                <h6>{item.title}</h6>
                <p>{item.summary}</p>
                <div className="ni-bodyDate">
                    <span className="publishDate">
                    {item.datepublished
                        ? new Date(item.datepublished).toLocaleDateString()
                        : ""}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {selectedNews && (
            <div className="modalOverlay" onClick={() => setSelectedNews(null)}>
                <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <button className="closeBtn" onClick={() => setSelectedNews(null)}>×</button>
                
                <div className="modalHeader">
                    <h2>{selectedNews.title}</h2>
                    <span className="modalMeta">
                    By {selectedNews.author} |{" "}
                    {selectedNews.datepublished
                        ? new Date(selectedNews.datepublished).toLocaleDateString()
                        : ""}
                    </span>
                </div>

                <div className="modalBody">
                    <div dangerouslySetInnerHTML={{ __html: selectedNews.content }} />
                </div>
                </div>
            </div>
            )}

        {/* Pagination Controls */}
        <div className="paginationControls">
            <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            >
             Prev
            </button>

            <span>
            Page {currentPage} of {totalPages}
            </span>

            <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            >
            Next
            </button>
        </div>
        </section>
    );
};


export const ErrorPage = () => {
    return(
        <>
            <section className="error" >
                <h2>404 PAGE ERROR</h2>
                <p style={{paddingTop: '10px'}}>Page still in Development stage, Upon launch of our App all pages will be duly uploaded. Head back to <Link to="/"> <span style={{color: 'blue', cursor: 'pointer', textDecoration: 'underline'}}>home page</span></Link> </p>
            </section>
        </>
    )
}




const UpdateLog = () => {
    const [versionLog, setVersionLog] = useState([]);

        useEffect(() => {
        const testFetch = async () => {
            const { data, error } = await supabase.from("version_logs").select("*");
            console.log("TEST FETCH:", data, error);
        };
        testFetch();
        }, []);

        if (!versionLog || versionLog.length === 0) {
            return <section className="versionLog">
            <div className="logHeader">
                <h6>Updates</h6>
                <span>
                View all changes <IoIosArrowDown className="lpArrowRight" />
                </span>
            </div>

            <div className="logBody">
                <p className='noLog'>No Log updates yet...</p>
            </div>
            </section>;
        }

        return (
            <section className="versionLog">
            <div className="logHeader">
                <h6>Updates</h6>
                <span>
                View all changes <IoIosArrowDown className="lpArrowRight" />
                </span>
            </div>

            <div className="logBody">
                {versionLog.map((log) => (
                <div className="logBodyCont" key={log.id}>
                    <div className="logTxtBox">
                    <strong>{log.version_number}</strong> — {log.summary}
                    </div>
                    <span className="logDate">
                    {log.date_released
                        ? new Date(log.date_released).toLocaleDateString()
                        : ""}
                    </span>
                </div>
                ))}
            </div>
            </section>
        );
};

export default UpdateLog;



/*    const LatestUpdateLog = {
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
*/

/*
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
*/
