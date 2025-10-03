import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./HelpCenter.css";
import Navigation from "../navigation";
import CustomCursor from "../Pages/customcursor";
import BackToTopBtn from '../../component';

const faqs = [
  {
    question: "How do I contact Mentora support?",
    answer:
      "You can reach our support team anytime via support@mentora.ai. We typically respond within 24 hours on weekdays.",
  },
  {
    question: "Is Mentora available on mobile devices?",
    answer:
      "Yes! You can access Mentora through your mobile browser or download our iOS and Android apps from the app stores.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription anytime from your account dashboard. You'll retain access until your billing period ends.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your learning data and progress are stored securely. If you return within 90 days, your data will be restored automatically.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const openWhatsApp = () => {
      const phoneNumber = "2347060692143"; // replace with your number
      const message = "Hello, I’d like to enquire in Real time."; // optional
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank"); // opens in new tab
    };

  return (
    <>
        <Navigation/>
        <CustomCursor />
      <section className="faq-section">
        <div className="faq-container">
          {/* Header */}
          <div className="faq-header">
            <h1 className="faq-main-title">
              Help Center
            </h1>
            <p className="faq-subtitle">
              Need assistance? Our team is here to support you every step of the way.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="contact-grid">
            <div className="contact-card">
              <h2 className="contact-card-title">Contact Us</h2>
              <p className="contact-card-description">Get in touch with our support team:</p>
              <ul className="contact-info">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@mentora.com" className="contact-link">
                    support@mentora.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +234 706 217 6940
                </li>
                <li>
                  <strong>Hours:</strong> Mon–Fri, 9AM–6PM (WAT)
                </li>
              </ul>
            </div>

            <div className="contact-card">
              <h2 className="contact-card-title">Live Chat</h2>
              <p className="contact-card-description">Talk to our support team in real time.</p>
              <button onClick={openWhatsApp} className="live-chat-button">
                Start Live Chat
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-questions-section">
            <h2 className="faq-section-title">
              Frequently Asked Questions
            </h2>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-button"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="faq-question">
                      {faq.question}
                    </span>
                    <span className="faq-icon">
                      {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="faq-footer">
        © {new Date().getFullYear()} Mentora. All rights reserved.
      </footer>

      <BackToTopBtn/>
    </>
  );
};

export default FAQ;