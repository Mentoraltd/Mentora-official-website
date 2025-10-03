import React, { useState, useEffect, useRef } from "react";
import { Apple, Play, Send, Star, ChevronLeft, ChevronRight, Monitor, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./download.css";
import DownloadHero from '../../assets/images/hero-image.webp';
import DownloadImages1 from '../../assets/images/hero-image.webp';
import DownloadImages2 from '../../assets/images/Personal.webp';
import DownloadImages3 from '../../assets/images/Together.webp';
import DownloadImages4 from '../../assets/images/Privacy.webp';
import DownloadImages5 from '../../assets/images/Easy.svg';
import Navigation from "../navigation";
import CustomCursor from "../Pages/customcursor";
import BackToTopBtn from '../../component';

const testimonials = [
  {
    name: "Anika R.",
    title: "High School Senior",
    avatar: "https://i.pravatar.cc/100?u=anika",
    text: "Mentora keeps me consistent. My daily goals and the streaks feature keep me motivated like never before.",
    rating: 5,
  },
  {
    name: "Junaid M.",
    title: "Medical Aspirant",
    avatar: "https://i.pravatar.cc/100?u=junaid",
    text: "I used to struggle staying on track. Now I actually look forward to my study sessions thanks to Mentora.",
    rating: 5,
  },
  {
    name: "Jordan M.",
    title: "Engineering Student",
    avatar: "https://i.pravatar.cc/100?u=jordan",
    text: "The AI recommendations and minimalist interface are exactly what I needed. I get more done in less time.",
    rating: 5,
  },
];

const features = [
  {
    title: 'Personalized Study Tools',
    points: [
      'Get AI-based topic recommendations.',
      'Set daily study goals with smart reminders.',
      'Track your performance and stay on pace.',
    ],
    image: DownloadImages2,
  },
  {
    title: 'Join Thousands of Focused Learners',
    points: [
      'Used by students all over the country',
      'Built with education experts and learning science.',
    ],
    image: DownloadImages3,
  },
  {
    title: 'Your Data, Fully Private',
    points: [
      'We never sell or share your study data.',
      'No ads, no distractions — just learning.',
      'Everything synced securely across devices.',
    ],
    image: DownloadImages4,
  },
  {
    title: 'Simple, Fast, and Motivating',
    points: [
      'Designed to feel as smooth as your favorite apps.',
      'Track your streaks and celebrate wins.',
      'No clutter, just your learning journey.',
    ],
    image: DownloadImages5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div className="testimonial-card">
    <img
      src={testimonial.avatar}
      alt={testimonial.name}
      className="testimonial-avatar"
    />
    <p className="testimonial-text">"{testimonial.text}"</p>
    <div className="testimonial-rating">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
    <p className="testimonial-name">{testimonial.name}</p>
    <p className="testimonial-title">{testimonial.title}</p>
  </motion.div>
);

const DownloadPage = () => {
  const [phone, setPhone] = useState("");
  const [index, setIndex] = useState(0);
  const touchStartRef = useRef(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const handleSendLink = (e) => {
    e.preventDefault();
    alert(`Link would be sent to: ${phone}`);
    setPhone("");
  };

  return (
    <>
        <Navigation/>
        <CustomCursor />

        <div className="download-page">
        {/* Hero Section */}
        <section className="hero-section">
            {/* Left Content */}
            <div className="hero-content">
            <div className="hero-text">
                <h1 className="hero-title">
                Download Mentora Now and Study Smarter
                </h1>
                <p className="hero-subtitle">
                Access your study materials anytime, anywhere.
                </p>
            </div>

            {/* App Store Buttons */}
            <div className="app-store-buttons">
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn apple"
                >
                <Apple size={24} />
                <span>App Store</span>
                </a>
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn google"
                >
                <Play size={24} />
                <span>Google Play</span>
                </a>
            </div>

            {/* Desktop Downloads */}
            <div className="desktop-downloads">
                <a
                href=""
                download
                className="desktop-btn windows"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 17h16M4 13h16M4 9h10" />
                </svg>
                <span>Windows</span>
                </a>
                <a
                href=""
                download
                className="desktop-btn mac"
                >
                <Apple size={20} />
                <span>Mac</span>
                </a>
                <a
                href=""
                download
                className="desktop-btn linux"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />
                </svg>
                <span>Linux</span>
                </a>
            </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image-container">
            <img
                src={DownloadHero}
                alt="Mentora App"
                className="hero-image"
            />
            </div>
        </section>

        {/* Features Section */}
        {features.map((feature, idx) => (
            <section key={idx} className="feature-section">
            <div className={`feature-container ${idx % 2 === 1 ? 'reverse' : ''}`}>
                {/* Text Content */}
                <div className="feature-text">
                <h2 className="feature-title">{feature.title}</h2>
                <ul className="feature-list">
                    {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
                </div>

                {/* Image */}
                <div className="feature-image-container">
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                />
                </div>
            </div>
            </section>
        ))}

        {/* Testimonials */}
        <section className="testimonials-section">
            <h2 className="testimonials-title">
            What learners say about Mentora
            </h2>
            <div
            className="testimonials-container"
            onTouchStart={(e) => (touchStartRef.current = e.changedTouches[0].clientX)}
            onTouchEnd={(e) => {
                const diff = e.changedTouches[0].clientX - touchStartRef.current;
                if (diff > 50) prev();
                else if (diff < -50) next();
            }}
            >
            <AnimatePresence mode="wait">
                <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                >
                <TestimonialCard testimonial={testimonials[index]} />
                </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <div className="testimonial-nav left">
                <button onClick={prev} className="nav-button">
                <ChevronLeft />
                </button>
            </div>
            <div className="testimonial-nav right">
                <button onClick={next} className="nav-button">
                <ChevronRight />
                </button>
            </div>

            {/* Dots */}
            <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`dot ${i === index ? 'active' : 'inactive'}`}
                />
                ))}
            </div>
            </div>
        </section>

        {/* Call-to-Action */}
        <section className="cta-section">
            <h2 className="cta-title">
            Get Mentora on your phone instantly after app launch
            </h2>
            <p className="cta-subtitle">
            We'll send you a download link so you can start studying smarter.
            </p>

            <form onSubmit={handleSendLink} className="cta-form" name="phoneForm" 
              netlify>
            <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" className="send-button">
                <Send size={20} />
                Text me the link
            </button>
            </form>
        </section>

        <BackToTopBtn/>


        {/* Footer */}
        <footer className="Dpfooter">
            © {new Date().getFullYear()} Mentora. All rights reserved.
        </footer>
        </div>
    </>
  );
};

export default DownloadPage;