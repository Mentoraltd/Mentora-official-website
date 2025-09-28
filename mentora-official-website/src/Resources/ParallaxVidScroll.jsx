import React from "react";
import ParallaxBox from "./ParallaxBox";
import "./parallaxSection.css";
import ParallaxVid1 from "./../assets/adaptivelearning.mp4";
import ParallaxVid2 from "./../assets/smartstudy.mp4";
import ParallaxVid3 from "./../assets/focusmode.mp4";
import ParallaxVid4 from "./../assets/wellbeing.mp4";
import ParallaxVid5 from "./../assets/072224_UpdatedSection2_Stroke_2px.mp4";

const ParallaxSection = () => {

  const Features = {
    box1: {
      title: "Adaptive Learning Engine",
      video: ParallaxVid1,
      content:
        "The Adaptive Learning Engine is the heart of the AI-powered study app. It continuously monitors each student’s learning behaviors, preferences, and performance metrics to create a truly personalized academic experience. Unlike traditional static learning paths, ALE dynamically adjusts the difficulty, content type, pacing, and even the style of instruction to match the evolving needs of each learner.",
    },
    box2: {
      title: "Smart Study Planner",
      video: ParallaxVid2,
      content:
        "The Smart Study Planner functions as the users intelligent academic assistant, crafting highly personalized daily and weekly study schedules. Powered by AI and behavioral data, it balances academic goals, course timelines, performance trends, and even mental wellness indicators to help students manage their time efficiently — and sustainably.",
    },
    box3: {
      title: "Focus Mode with Pomodoro Timer",
      video: ParallaxVid3,
      content:
        "transforms the act of studying into a deeply immersive and productive experience using the Pomodoro Technique, a proven time-management method. By breaking study sessions into focused intervals (typically 25 minutes) followed by short breaks, this mode helps users build concentration stamina, beat procrastination, and avoid mental fatigue.",
    },
    box4: {
      title: "Well-being & Break Reminders",
      video: ParallaxVid4,
      content:
        "integrates mental and physical wellness directly into the academic journey, ensuring students stay healthy, focused, and emotionally balanced. Using AI-powered insights, it schedules timely wellness prompts — such as stretching, hydration, posture checks, and breathing exercises — tailored to individual study patterns, stress indicators, and productivity rhythms.",
    },
    box5: {
      title: "Virtual Flashcards with Spaced Repetition",
      video: ParallaxVid5,
      content:
        "transforms traditional flashcards into a smart, memory-optimized tool backed by cognitive science. By integrating AI-powered spaced repetition, the system ensures learners review the right information at the right time — maximizing retention while minimizing study time.",
    },
  };

  const parallaxBoxesData = Object.keys(Features).map((key) => ({
    id: key,
    title: Features[key].title,
    content: Features[key].content,
    videoSrc: Features[key].video
  }));


  return (
    <section className="parallax-section">
      <div className="parallaxEffect">
        <div className="parallaxScrollingInterection">
          <div className="parallaxLeft">
            {parallaxBoxesData.map((data, index) => {
              return (
                <ParallaxBox
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  content={data.content}
                  videoSrc={data.videoSrc}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
