"use client"

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Button from "@/components/Button";
import ScrollProgress from "@/components/ScrollProgress";
import Glow from "@/components/Glow";

export default function Home() {
  const [starCount, setStarCount] = useState(100);
  const [stars, setStars] = useState([]);
  const [isClient, setIsClient] = useState(false);

  const generateStars = (count) => {
    return Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  };

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setStarCount(100);
      } else if (window.innerWidth >= 768) {
        setStarCount(50);
      } else {
        setStarCount(25);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setStars(generateStars(starCount));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [starCount]);

  if (!isClient) {
    return null;
  }

  return (
    <main id="home" className="min-h-screen w-full flex flex-col items-center">
      <Nav />
      <section
        id="home-landing"
        className="relative flex flex-col items-center justify-center h-screen w-full text-center px-4 sm:px-6 md:px-12"
      >
        <h2 className="text-grayLight font-secondary text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          こんにちは
        </h2>
        <h2 className="text-background font-secondary text-outline text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
          ?
        </h2>
        <h2 className="text-grayLight font-secondary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Exigent / Aravindh
        </h2>
        <div
          className="absolute bottom-0 z-1 w-screen h-[4rem] bg-background opacity-[1] blur-3xl rounded-full flex justify-center items-center"
          style={{
            boxShadow: "0 0 50px 20px rgba(0, 0, 0, 1)",
          }}
        />
        <div className="absolute top-0 left-0 w-screen h-screen bg-transparent z-[-1]">
          <div className="stars">
            {stars.map((star, index) => (
              <div
                key={index}
                className="star"
                style={{
                  top: star.top,
                  left: star.left,
                  animationDelay: star.animationDelay,
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="home-about"
        className="flex flex-col relative z-20 lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 px-6 lg:px-12 w-screen h-screen"
      >
        <Glow />
        <div className="flex flex-col w-full lg:w-1/4 items-center lg:items-start text-grayLight font-headings text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          <h3 className="mb-6 sm:mb-8 lg:mb-16 text-center lg:text-left">
            Unraveling Stories, Exploring Mysteries.
          </h3>
          <Button value="Know More" />
        </div>
        <div className="hidden lg:block w-[1px] h-[60%] bg-gradient-to-b from-transparent via-grayLight to-transparent"></div>
        <div className="text-grayLight font-display text-xl sm:text-xl md:text-xl lg:text-3xl max-w-full lg:max-w-2xl text-center lg:text-left px-4 lg:px-0">
          <p>
            This is where I bring together my interest in solving puzzles and sharing ideas. From decoding challenges to diving into creative projects, every post is about discovering something new. Stick around—there's always a story to uncover.
          </p>
        </div>
      </section>

      <ScrollProgress />
    </main>
  );
}
