import PricingComparison from './components/PricingComparison';


const App = () => (
    <Router>
      <Routes>
        <Route path="/pricing-comparison" element={<PricingComparison />} />
      </Routes>
    </Router>
  );//#endregion

  
   <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 text-sm text-gray-600">
   {[
     { label: "Home", icon: "🏠" },
     { label: "Study", icon: "📚" },
     { label: "Progress", icon: "📊" },
     { label: "AI Tutor", icon: "🤖" },
     { label: "Settings", icon: "⚙️" },
   ].map((nav, idx) => (
     <div key={idx} className="flex flex-col items-center text-purple-600">
       <span className="text-xl">{nav.icon}</span>
       <span className="text-xs">{nav.label}</span>
     </div>
   ))}
 </nav>



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


 {/* App Screens Carousel */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.5, duration: 0.6 }}
 className="relative max-w-2xl mx-auto mb-16"
 onTouchStart={(e) => (screenTouchStart.current = e.changedTouches[0].clientX)}
 onTouchEnd={(e) => {
   const diff = e.changedTouches[0].clientX - screenTouchStart.current;
   if (diff > 50) prevScreen();
   else if (diff < -50) nextScreen();
 }}
>
 <AnimatePresence mode="wait">
   <motion.img
     key={appScreens[screenIndex]}
     src={appScreens[screenIndex]}
     alt={`Mentora preview ${screenIndex + 1}`}
     className="rounded-xl shadow-lg mx-auto"
     initial={{ opacity: 0, x: 100 }}
     animate={{ opacity: 1, x: 0 }}
     exit={{ opacity: 0, x: -100 }}
     transition={{ duration: 0.5 }}
   />
 </AnimatePresence>
 <div className="absolute top-1/2 left-0 -translate-y-1/2">
   <button onClick={prevScreen} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
     <ChevronLeft />
   </button>
 </div>
 <div className="absolute top-1/2 right-0 -translate-y-1/2">
   <button onClick={nextScreen} className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
     <ChevronRight />
   </button>
 </div>
 <div className="flex justify-center mt-4 gap-2">
   {appScreens.map((_, i) => (
     <button
       key={i}
       onClick={() => setScreenIndex(i)}
       className={`w-3 h-3 rounded-full ${i === screenIndex ? "bg-gray-800" : "bg-gray-400"}`}
     />
   ))}
 </div>
</motion.div>
