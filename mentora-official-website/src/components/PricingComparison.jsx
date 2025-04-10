import React from "react";
import { pricingData } from "./data";

const PricingComparison = () => {
  const { plans, features, competitors } = pricingData;

  return (
    <div className=" justify-center p-4 sm:p-6 bg-purple-200 min-h-screen">
      {/* Pricing Plans */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-8">Mentora Pricing</h2>

        <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`text-white p-6 rounded-xl shadow-md w-full md:w-1/2 transform hover:scale-105 transition duration-300 ${plan.color}`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-white text-sm">
                {plan.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <button className="mt-6 bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-400 transition">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PricingComparison;
