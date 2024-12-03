"use client"

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const newScrollPercentage = (scrollTop / scrollHeight) * 100;

      gsap.to(".scroll-bar-fill", {
        width: `${Math.min(newScrollPercentage, 100)}%`,
        ease: "power2.out",
      });

      setScrollPercentage(newScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed mix-blend-difference w-screen bottom-2 flex items-center justify-center gap-4 px-4 sm:px-8">
      <p className="font-secondary text-grayLight text-lg sm:text-2xl">{Math.round(scrollPercentage)}%</p>

      <div className="relative backg w-[100%] h-[10px] sm:h-[15px] border-y-2 border-x-[1px] border-grayLight bg-background overflow-hidden">
        <div
          className="scroll-bar-fill absolute top-0 left-0 h-full bg-grayLight"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <p className="font-secondary text-grayLight text-lg sm:text-2xl">100%</p>
    </div>
  );
}
