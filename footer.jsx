import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
       const scrollTop = () => {
          window.scrollTo({ top: 0, behavior: "auto" });
        };
  return (
    <>
      <section className="footer">
          <div className="footerContainer">
            <div className="desc">
              <div className="brand">
                <span>Mentora</span>
              </div>
              <div className="text">
              Designed to meet the unique needs of Nigerian students — with intuitive design, and contextual examples relevant to national curricula.</div>
              <div className="inc">2025 Mentora. All rights reserved</div>
            </div>
            <div className="links">
              <div className="company">
                <header>Company</header>

                <ul>
                  <Link to="/students" onClick={scrollTop}><li>Students</li></Link>
                  <Link to="/institution" onClick={scrollTop}><li>Institution</li></Link>
                  <Link to="/download" onClick={scrollTop}><li>Download</li></Link>
                  <Link to="/blog" onClick={scrollTop}><li>Blog</li></Link>
                  <Link to="/helpcenter" onClick={scrollTop}><li>HelpCenter</li></Link>
                  <Link to="/pricing" onClick={scrollTop}><li>Pricing</li></Link>
                </ul>
              </div>
              <div className="connect">
                <header>Connect to us</header>
                <div className="socials">
                  <a href="https://www.instagram.com/study_with_mentora/"><span>Instagram</span></a><a href="https://x.com/studywithmentora"><span>X</span></a>
                </div>
              </div>
            </div>

          </div>
      </section>
    </>
  )
};

export default Footer;