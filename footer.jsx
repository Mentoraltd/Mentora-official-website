import React from "react";
import './footer.css';

const Footer = () => {
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
                  <li>Term of Services</li>
                  <li>Privacy Policy</li>
                  <li>FAQ</li>
                  <li>Resources</li>
                  <li>Features</li>
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