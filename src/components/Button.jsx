"use client";

import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";

export default function Button({ value, width = "250px", height = "40px", size = "36px" }) {
  useEffect(() => {
    const buttons = document.querySelectorAll(".animated-button");

    buttons.forEach((button) => {
      const text = button.querySelector(".button-text");
      const arrow = button.querySelector(".button-arrow");
      const hoverEffect = button.querySelector(".hover-effect");

      const onPointerEnter = (e) => {
        const rect = button.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        gsap.set(hoverEffect, {
          width: 0,
          height: 0,
          top: relY,
          left: relX,
          backgroundColor: "var(--gray-light)",
        });

        gsap.to(hoverEffect, {
          width: "225%",
          height: "562.5px",
          duration: 0.4,
          ease: "power1.out",
        });

        gsap.to([text, arrow], {
          color: "var(--background)",
          delay: 0.5,
          borderColor: "var(--background)",
          duration: 0.1,
          ease: "power1.out",
        });
      };

      const onPointerLeave = (e) => {
        const rect = button.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        gsap.to(hoverEffect, {
          width: 0,
          height: 0,
          duration: 0.4,
          ease: "power1.in",
          top: relY,
          left: relX,
        });

        gsap.to([text, arrow], {
          color: "var(--gray-light)",
          delay: 0.5,
          borderColor: "var(--gray-light)",
          duration: 0.1,
          ease: "power1.in",
        });
      };

      button.addEventListener("pointerenter", onPointerEnter);
      button.addEventListener("pointerleave", onPointerLeave);

      return () => {
        button.removeEventListener("pointerenter", onPointerEnter);
        button.removeEventListener("pointerleave", onPointerLeave);
      };
    });
  }, []);

  const buttonStyles = `animated-button font-secondary border-[1px] flex justify-evenly items-center self-center border-grayLight relative overflow-hidden`;
  const textStyles = `button-text flex items-center justify-center h-full`;
  const arrowStyles = `button-arrow flex items-center justify-center h-full w-[25%] border-l-[1px]`;

  return (
    <button
      className={`${buttonStyles} w-[${width}] h-[${height}] sm:w-[200px] sm:h-[50px] lg:w-[250px] lg:h-[60px]`}
    >
      <span className="hover-effect"></span>

      <p
        className={`${textStyles} text-[${size}] p-2 sm:text-[30px] lg:text-[36px]`}
        style={{ width: "100%" }}
      >
        {value}
      </p>
      <p className={`${arrowStyles}`}>
        <IoIosArrowForward
          className="w-full"
          style={{ height: size }}
        />
      </p>
    </button>
  );
}
