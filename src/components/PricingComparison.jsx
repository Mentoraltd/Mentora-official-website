import React, { useState } from "react";
import { pricingData } from "./data";
import { motion, AnimatePresence } from "framer-motion";

const PricingPage = () => {
  const { plans } = pricingData;
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in the free trial?",
      answer:
        "The free trial gives you access to selected AI-curated courses and limited AI chatbot interactions. You can explore the platform before committing to a plan.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes! You can upgrade or downgrade your subscription at any time through your account settings. Changes will apply at the next billing cycle.",
    },
    {
      question: "Is the AI chatbot available 24/7?",
      answer:
        "Absolutely! Our AI chatbot is available 24/7 to assist with your studies. However, usage limits may apply based on your subscription plan.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 7-day money-back guarantee for first-time subscribers. If you're not satisfied, simply contact our support team within 7 days of your purchase.",
    },
    {
      question: "How does the Enterprise plan work?",
      answer:
        "The Enterprise plan is custom-built for organizations. It includes unlimited AI chatbot access for teams, tailored AI learning paths, on-site workshops, and dedicated support. Contact our sales team for a personalized quote.",
    },
  ];

  const features = [
    {
      title: "AI-Powered Study Coach",
      description: "Get personalized feedback and guidance with an intelligent mentor that learns how you learn.",
      icon: "🤖",
    },
    {
      title: "Unlimited Practice Sets",
      description: "Access thousands of curated questions and adaptive quizzes for deep mastery.",
      icon: "📝",
    },
    {
      title: "Progress Tracking",
      description: "Visual dashboards and reports to help you stay on track and reach your goals.",
      icon: "📈",
    },
    {
      title: "Expert-Curated Materials",
      description: "Study from resources designed by top educators across multiple disciplines.",
      icon: "📚",
    },
    {
      title: "Study Anywhere",
      description: "Use Mentora seamlessly on desktop, tablet, or mobile—sync across devices.",
      icon: "🌍",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">

      {/* Hero Section */}
      <section className="bg-white py-5 text-center px-3">
        <h1 className="display-5 fw-bold text-dark mb-4">
          Learn Smarter with Mentora: <br />AI Personalized Study Support at Your Fingertips
        </h1>
        <p className="lead text-muted mb-4 fst-italic">
          Start free today and experience the future of education with your personal AI Study Assistant.
        </p>
        <div className="d-grid gap-3 d-sm-flex justify-content-center mb-3">
          <button className="btn btn-outline-dark px-4 py-2 fw-bold">Start Free Trial</button>
          <button className="btn btn-dark px-4 py-2 fw-bold">Enter Your Email</button>
        </div>
        <p className="text-muted small fst-italic">
          No credit card required. By signing up, you agree to receive important updates and AI learning tips.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="container py-5">
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group">
            <button className="btn btn-light fw-semibold">Pay monthly</button>
            <button className="btn btn-dark fw-semibold">Pay yearly (save 25%)</button>
          </div>
        </div>

        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-12 col-sm-6 col-md- col-lg-3 mb-4">
              <div className="card shadow-sm h-100 border-0 position-relative">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    {plan.name === "Basic" && (
                      <div className="badge bg-success text-dark position-absolute top-0 end-0 m-3">
                        Most Popular
                      </div>
                    )}
                    {plan.name === "Plus" && (
                      <div className="badge bg-primary text-white position-absolute top-0 end-0 m-3">
                        1- or 3-year term
                      </div>
                    )}
                    <h5 className="card-title fw-bold">{plan.name}</h5>
                    <h2 className="fw-bold mb-3">{plan.price}</h2>
                    <p className="text-muted">{plan.subText}</p>
                    <ul className="list-unstyled mt-3">
                      {plan.description.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn btn-dark mt-4">{plan.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What every plan gets you</h2>
          <div className="row justify-content-center">
            {features.map((feature, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="bg-light p-4 rounded shadow-sm h-100">
                  <div className="fs-3 mb-3">{feature.icon}</div>
                  <h6 className="fw-semibold">{feature.title}</h6>
                  <p className="small text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-3 border-bottom pb-3"
                id={`faq-item-${index}`}
              >
                <button
                  className="btn w-100 text-start d-flex justify-content-between align-items-center"
                  onClick={() => {
                    toggleFAQ(index);
                    setTimeout(() => {
                      const el = document.getElementById(`faq-item-${index}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 150);
                  }}
                >
                  <span className="fw-semibold">{faq.question}</span>
                  <span className="fs-5 text-muted">
                    {openFAQ === index ? "▴" : "▾"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-2"
                    >
                      <p className="text-muted small">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="bg-white py-5 text-center px-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-bold display-6 mb-3 fst-italic">
          Ready to unlock your AI-powered learning journey?
        </h2>
        <p className="lead mb-4 fst-italic">
          Join thousands of learners mastering their skills with Mentora.
        </p>
        <button className="btn btn-outline-dark px-5 py-3 fw-bold">
          Get Started for Free
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="bg-light text-center text-muted py-3 small mt-5">
        © {new Date().getFullYear()} Mentora. All rights reserved.
      </footer>
    </div>
  );
};

export default PricingPage;
