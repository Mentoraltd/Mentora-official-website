import React, { useState, useEffect, useRef } from "react";
import { Apple, Play, Send, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    image: '/images/Personal.webp',
  },
  {
    title: 'Join Thousands of Focused Learners',
    points: [
      'Used by students in 80+ countries.',
      'Built with education experts and learning science.',
      '4.8-star rating from thousands of reviews.',
    ],
    image: '/images/Together.webp',
  },
  {
    title: 'Your Data, Fully Private',
    points: [
      'We never sell or share your study data.',
      'No ads, no distractions — just learning.',
      'Everything synced securely across devices.',
    ],
    image: '/images/Privacy.webp',
  },
  {
    title: 'Simple, Fast, and Motivating',
    points: [
      'Designed to feel as smooth as your favorite apps.',
      'Track your streaks and celebrate wins.',
      'No clutter, just your learning journey.',
    ],
    image: '/images/Easy.svg',
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div className="bg-white p-4 rounded shadow text-center mx-auto" style={{ maxWidth: '600px' }}>
    <img src={testimonial.avatar} alt={testimonial.name} className="rounded-circle mb-3" width="64" height="64" />
    <p className="fst-italic text-muted mb-3">"{testimonial.text}"</p>
    <div className="mb-2 text-warning">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
    <small className="text-secondary">{testimonial.title}</small>
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

  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="container py-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-5 fw-bold">Download Mentora Now and Study Smarter</h1>
          <p className="lead text-muted">Access your study materials anytime, anywhere.</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer" className="btn btn-dark d-flex align-items-center gap-2">
              <Apple size={20} /> App Store
            </a>
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="btn btn-success d-flex align-items-center gap-2">
              <Play size={20} /> Google Play
            </a>
          </div>
          <div className="d-flex flex-wrap gap-3">
            <a href="/downloads/mentora-setup.exe" download className="btn btn-primary d-flex align-items-center gap-2">
              <i className="bi bi-windows"></i> Windows
            </a>
            <a href="/downloads/mentora.dmg" download className="btn btn-dark d-flex align-items-center gap-2">
              <Apple size={20} /> Mac
            </a>
            <a href="/downloads/mentora.AppImage" download className="btn btn-secondary d-flex align-items-center gap-2">
              <i className="bi bi-box"></i> Linux
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src="/images/hero-image.webp" alt="Mentora App" className="img-fluid" />
        </div>
      </section>

      {/* Features Section */}
      {features.map((feature, idx) => (
        <section key={idx} className="py-5 bg-white text-center text-md-start">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
            <div className={`col-md-6 ${idx % 2 === 1 ? 'order-md-2' : ''}`}>
              <h2>{feature.title}</h2>
              <ul className="list-unstyled">
                {feature.points.map((point, i) => (
                  <li key={i} className="mb-2">• {point}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img src={feature.image} alt={feature.title} className="img-fluid" style={{ maxWidth: '70%' }} />
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-5 bg-light text-center">
        <h2 className="fw-bold mb-4">What learners say about Mentora</h2>
        <div
          className="position-relative"
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
          <button className="btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y" onClick={prev}>
            <ChevronLeft />
          </button>
          <button className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y" onClick={next}>
            <ChevronRight />
          </button>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`btn rounded-circle p-2 ${i === index ? "btn-dark" : "btn-secondary"}`}
              style={{ width: "10px", height: "10px" }}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-white text-center">
        <h2 className="fw-semibold mb-3">Get Mentora on your phone instantly</h2>
        <p className="text-muted mb-4">We'll send you a download link so you can start studying smarter.</p>
        <form onSubmit={handleSendLink} className="container d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control form-control-lg"
            placeholder="Enter your phone number"
          />
          <button type="submit" className="btn btn-dark btn-lg d-flex align-items-center gap-2">
            <Send size={18} /> Text me the link
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4 text-muted small">
        © {new Date().getFullYear()} Mentora. All rights reserved.
      </footer>
    </div>
  );
};

export default DownloadPage;
