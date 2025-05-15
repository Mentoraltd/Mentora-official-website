import React from "react";
import './Footer.css';

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
              Unique Value Proposition
                Mentora is unique because it combines academic success with well-
                being. Unlike competitors, it’s not just a study tool but a holistic
                platform that helps students manage stress, plan smarter, and stay
                motivated through gamification.</div>
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
                  <span>Twitter</span><span>Instagram</span>
                </div>
              </div>
            </div>

          </div>
      </section>
    </>
  )
};

export default Footer;