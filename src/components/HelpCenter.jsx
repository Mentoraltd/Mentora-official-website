import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  return (
    <>
      <section className="bg-light py-5 px-3">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-dark mb-3">Help Center</h1>
            <p className="text-muted fs-5">
              Need assistance? Our team is here to support you every step of the way.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h2 className="h5 fw-semibold text-dark mb-2">Contact Us</h2>
                <p className="text-muted mb-3">Get in touch with our support team:</p>
                <ul className="list-unstyled small text-muted">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:support@mentora.com" className="text-decoration-none text-primary">
                      support@mentora.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong> +234 903 123-4567
                  </li>
                  <li>
                    <strong>Hours:</strong> Mon–Fri, 9AM–6PM (WAT)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h2 className="h5 fw-semibold text-dark mb-2">Live Chat</h2>
                <p className="text-muted mb-3">Talk to our support team in real time.</p>
                <button className="btn btn-dark">Start Live Chat</button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-center fw-bold h4 mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-3 p-3 mb-3">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="btn w-100 d-flex justify-content-between align-items-center text-start"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="fw-medium">{faq.question}</span>
                    <span className="text-muted">
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
                        className="overflow-hidden mt-2 text-muted"
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
      <footer className="bg-light text-center text-muted py-3 small mt-4">
        © {new Date().getFullYear()} Mentora. All rights reserved.
      </footer>
    </>
  );
};

export default FAQ;
