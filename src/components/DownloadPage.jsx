import React, { useState, useEffect, useRef } from "react";
import { Apple, Play, Send, Star, ChevronLeft, ChevronRight, Monitor, Terminal } from "lucide-react";
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
  <motion.div className="bg-white p-8 rounded-xl shadow-md text-center max-w-2xl mx-auto">
    <img
      src={testimonial.avatar}
      alt={testimonial.name}
      className="w-16 h-16 rounded-full mx-auto mb-4"
    />
    <p className="italic text-lg text-gray-700 mb-4">"{testimonial.text}"</p>
    <div className="flex justify-center gap-1 text-yellow-500 mb-2">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
    <p className="font-semibold text-gray-800">{testimonial.name}</p>
    <p className="text-sm text-gray-500">{testimonial.title}</p>
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
    <div className="bg-gray-100 text-gray-800">
  {/* Hero Section */}
  <section className="bg-gray-50 py-10 px-6 md:px-40 flex flex-col md:flex-row items-center justify-between">
    {/* Left Content */}
    <div className="max-w-xl w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold">
          Download Mentora Now and Study Smarter
        </h1>
        <p className="text-lg text-gray-700">
          Access your study materials anytime, anywhere.
        </p>
      </div>

      {/* App Store Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://apps.apple.com/app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 text-lg rounded-xl shadow hover:opacity-90 transition"
        >
          <Apple size={24} />
          <span>App Store</span>
        </a>
        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-3 text-lg rounded-xl shadow hover:opacity-90 transition"
        >
          <Play size={24} />
          <span>Google Play</span>
        </a>
      </div>

      {/* Desktop Downloads */}
      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href="/downloads/mentora-setup.exe"
          download
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 17h16M4 13h16M4 9h10" />
          </svg>
          <span>Windows</span>
        </a>
        <a
          href="/downloads/mentora.dmg"
          download
          className="flex items-center justify-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg shadow hover:bg-gray-900 transition"
        >
          <Apple size={20} />
          <span>Mac</span>
        </a>
        <a
          href="/downloads/mentora.AppImage"
          download
          className="flex items-center justify-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded-lg shadow hover:bg-gray-800 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" />
          </svg>
          <span>Linux</span>
        </a>
      </div>
    </div>

    {/* Hero Image */}
    <div className="mt-10 md:mt-0 md:w-1/2">
      <img
        src="/images/hero-image.webp"
        alt="Mentora App"
        className="w-full h-auto"
      />
    </div>
  </section>


     {/* Features Section */}
{features.map((feature, idx) => (
  <section
    key={idx}
    className="py-12 px-4 md:px-16 flex flex-col items-center text-center md:text-left"
  >
    <div
      className={`flex flex-col-reverse md:flex-row ${
        idx % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-center gap-8 w-full max-w-6xl`}
    >
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">{feature.title}</h2>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
          {feature.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-1/2 max-w-sm sm:max-w-md"
        />
      </div>
    </div>
  </section>
))}

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
          What learners say about Mentora
        </h2>
        <div
          className="relative max-w-4xl mx-auto"
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
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <button onClick={prev} className="p-3 bg-white rounded-full shadow hover:bg-gray-100">
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <button onClick={next} className="p-3 bg-white rounded-full shadow hover:bg-gray-100">
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3.5 h-3.5 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-semibold mb-6">
  Get Mentora on your phone instantly
</h2>
<p className="mb-6 text-gray-600">
  We'll send you a download link so you can start studying smarter.
</p>

        <form
          onSubmit={handleSendLink}
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-5 items-center justify-center"
        >
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            className="flex-1 px-5 py-4 border text-lg rounded-xl text-gray-800 focus:ring-2 ring-gray-800 outline-none w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className="flex items-center gap-3 bg-gray-800 text-white px-6 py-4 text-lg rounded-xl hover:bg-gray-700 transition"
          >
            <Send size={20} />
            Text me the link
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-100 via-white to-gray-50 text-center text-gray-500 py-8 text-sm">
        © {new Date().getFullYear()} Mentora. All rights reserved.
      </footer>
    </div>
  );
};

export default DownloadPage;
