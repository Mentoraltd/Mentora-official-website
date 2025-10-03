import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { pricingData } from "./data";
import "./PricingPage.css";
import Navigation from "../navigation";
import CustomCursor from "./customcursor";
import BackToTopBtn from '../../component';
import Popup from '../../Resources/popup';
import { Button } from '@mui/material';

const PricingPage = () => {
  const { plans } = pricingData;
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openDialogMsg, setOpenDialogMsg] = useState(false);

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

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
        <Navigation/>
        <CustomCursor />
        <Popup
            openPopup={openDialogMsg}
            setOpenPopup={setOpenDialogMsg}
            title="Download APK"
            actions={
            <>
                <Button onClick={() => setOpenDialogMsg(false)} color="secondary">
                Cancel
                </Button>
            </>
            }
        >
            <p>This app is not yet available for Download. Please check back soon.</p>
        </Popup>
        <div className="pricing-page">
        
        {/* --- HERO SECTION --- */}
        <section className="hero-section">
            <h1 className="hero-title">
            AI Personalized Study Support at Your Fingertips
            </h1>
            <p className="hero-subtitle">
            Start free today and experience the future of education with your personal AI Study Assistant.
            </p>
            <div className="hero-buttons">
            <button className="hero-btn primary">
                Start Free Trial
            </button>
            <button className="hero-btn secondary">
                Enter Your Email
            </button>
            </div>
            <p className="hero-disclaimer">
            No credit card required. By signing up, you agree to receive important updates and AI learning tips.
            </p>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="pricing-section">
            <div className="pricing-container">
            
            {/* Payment Toggle */}
            <div className="payment-toggle">
                <div className="toggle-container">
                <button className="toggle-btn active">
                    Pay monthly
                </button>
                <button className="toggle-btn">
                    Pay yearly (save 25%)*
                </button>
                </div>
            </div>

            <span className="preLaunch">Coming soon...</span>

            {/* Pricing Cards */}
            <div className="pricing-grid">
                {plans.map((plan, index) => (
                <div key={index} className="pricing-card">
                    {/* Badges */}
                    {plan.name === "Basic" && (
                    <div className="plan-badge popular">
                        Most Popular
                    </div>
                    )}
                    {plan.name === "Plus" && (
                    <div className="plan-badge term">
                        Available on a 1- or 3-year term
                    </div>
                    )}

                    <div className="plan-content">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-price">{plan.price}</p>
                    <p className="plan-subtext">{plan.subText}</p>
                    <ul className="plan-features">
                        {plan.description.map((item, i) => (
                        <li key={i}>• {item}</li>
                        ))}
                    </ul>
                    </div>
                    <button className="plan-subscribe-btn">
                    {plan.buttonText}
                    </button>
                </div>
                ))}
            </div>

            </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
            <div className="features-container">
            <h2 className="features-title">
                What every plan gets you
            </h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                <div key={index} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="faq-section">
            <div className="faq-container">
            <h2 className="faq-title">
                Frequently Asked Questions
            </h2>

            <div className="faq-list">
                {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-button"
                    >
                    <span className="faq-question">
                        {faq.question}
                    </span>
                    <span className="faq-toggle-icon">
                        {openFAQ === index ? "−" : "+"}
                    </span>
                    </button>

                    {/* Animate answer */}
                    <AnimatePresence initial={false}>
                    {openFAQ === index && (
                        <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="faq-answer"
                        >
                        <p className="faq-answer-text">
                            {faq.answer}
                        </p>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <motion.section
            className="final-cta"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="cta-title">
            Ready to unlock your AI-powered learning journey?
            </h2>
            <p className="cta-subtitle">
            Join thousands of learners mastering their skills with Mentora.
            </p>

            <button onClick={() => {setOpenDialogMsg(true)}} className="cta-button">
            Get Started for Free
            </button>
        </motion.section>

        {/* --- FOOTER --- */}
        <footer className="pricing-footer">
            © {new Date().getFullYear()} Mentora. All rights reserved.
        </footer>
        </div>
        <BackToTopBtn/>
    </>
  );
};

export default PricingPage;