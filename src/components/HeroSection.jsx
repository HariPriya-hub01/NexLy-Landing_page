import { useState, useEffect, useRef } from "react";
import heroVideo from "../assets/hero-video.mp4";
import { animateHeroSection } from "../animations/heroAnimation";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const containerRef = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    const words = ["Transcends", "Unites", "Empowers", "Connects"];
    animateHeroSection(containerRef, wordRef, words);
  }, []);

  return (
    <div id="home" 
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 pb-20 text-blue-950 dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300 scroll-mt-24"
    >
      <div className="w-full md:w-1/2 pt-[50px] text-center md:text-left">
        <h1 className="hero-animate text-center text-2xl sm:text-4xl lg:text-5xl tracking-wide">
          Teamwork That <br />
          <span
            ref={wordRef}
            className="bg-gradient-to-r from-red-600 to-yellow-500 dark:from-yellow-300 dark:to-rose-600 text-transparent bg-clip-text transition-opacity duration-300"
          >
            Transcends
          </span>{" "}
          <br />
          Time Zones
        </h1>

        <p className="hero-animate mt-10 text-center text-sm text-blue-950 text-opacity-60 dark:text-neutral-400 dark:text-opacity-100 max-w-lg mx-auto">
          <span className="font-semibold">Nexly</span> brings your team, tools and tasks together—seamlessly.
          Collaborate in real time, manage projects effortlessly and power productivity like never before.
        </p>

        <div className="hero-buttons flex justify-center items-center md:justify-start my-10">
          <a
            href="#"
            className="dark:bg-gradient-to-bl bg-gradient-to-tr from-yellow-200 to-rose-500 dark:from-yellow-600 dark:to-rose-600 py-3 px-4 mx-3 lg:ml-20 rounded-md hover:bg-none dark:hover:bg-none hover:bg-yellow-500  dark:hover:bg-rose-600"
          >
            Get Started for Free
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:hover:bg-yellow-500 dark:hover:bg-rose-600">
            Request a Demo →
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-[400px] w-[490px] sm:h-[340px] md:h-[400px] object-cover rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
