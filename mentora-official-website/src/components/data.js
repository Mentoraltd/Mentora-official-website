// data.js or inside your component file
export const pricingData = {
    plans: [
      {
        name: "Free",
        price: "$0/yr",
        description: ["Basic study planner", "Flashcards"],
        color: "bg-blue-700",
        buttonText: "Subscribe"
      },
      {
        name: "Premium",
        price: "$14/yr",
        description: ["Adaptive learning", "Focus mode", "More features"],
        color: "bg-green-700",
        buttonText: "Subscribe"
      }
    ],
    features: [
      "Smart Study Planner",
      "Adaptive Learning",
      "Pomodoro Timer",
      "Collaborative Spaces",
      "Focus Mode",
      "Gamification",
      "Highlight Reminders",
      "Progress Tracker"
    ],
    competitors: [
      {
        name: "Mentora",
        features: [true, true, true, true, true, true, true, true],
        price: "$14.99/year"
      },
      {
        name: "Quizlet",
        features: [true, false, false, false, false, true, false, false],
        price: "$35.99/year"
      },
      {
        name: "StudySmarter",
        features: [true, true, true, true, false, false, false, true],
        price: "$39.99/year"
      },
      {
        name: "Forest",
        features: [false, false, true, false, true, false, true, false],
        price: "$1.99 one-time"
      },
      {
        name: "Notion",
        features: [false, false, false, true, false, false, true, false],
        price: "Free"
      }
    ]
  };
  