import React, { useState } from "react";
import { pricingData } from "./data";

const PricingPage = () => {
  const { plans } = pricingData;
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is included in the free trial?",
      answer: "The free trial gives you access to selected AI-curated courses and limited AI chatbot interactions. You can explore the platform before committing to a plan.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your subscription at any time through your account settings. Changes will apply at the next billing cycle.",
    },
    {
      question: "Is the AI chatbot available 24/7?",
      answer: "Absolutely! Our AI chatbot is available 24/7 to assist with your studies. However, usage limits may apply based on your subscription plan.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee for first-time subscribers. If you're not satisfied, simply contact our support team within 7 days of your purchase.",
    },
    {
      question: "How does the Enterprise plan work?",
      answer: "The Enterprise plan is custom-built for organizations. It includes unlimited AI chatbot access for teams, tailored AI learning paths, on-site workshops, and dedicated support. Contact our sales team for a personalized quote.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-b from-blue-100 via-white to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Learn Smarter with Mentora: <br />AI Personalized Study Support at Your Fingertips
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Start free today and experience the future of education with your personal AI Study Assistant.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Start Free Trial
          </button>
          <button className="bg-gray-200 text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition">
            Enter Your Email
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          No credit card required. By signing up, you agree to receive important updates and AI learning tips.
        </p>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="flex justify-center items-center p-10">
        <div className="w-full max-w-7xl">
          
          {/* Payment Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-200 p-2 rounded-full flex">
              <button className="px-6 py-2 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-300 transition">
                Pay monthly
              </button>
              <button className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-700 transition">
                Pay yearly (save 25%)* 
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between
                  transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Badges */}
                {plan.name === "Basic" && (
                  <div className="absolute top-4 right-4 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                {plan.name === "Plus" && (
                  <div className="absolute top-4 right-4 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Available on a 1- or 3-year term
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold mb-5">{plan.name}</h3>
                  <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
                  <p className="text-sm text-gray-500 mb-6">{plan.subText}</p>
                  <ul className="space-y-3 text-gray-700 text-base">
                    {plan.description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 bg-black text-white font-bold px-4 py-3 rounded-lg hover:bg-gray-800 transition">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-400">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-600 transition-all duration-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default PricingPage;
