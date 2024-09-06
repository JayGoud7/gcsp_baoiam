import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".what",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        delay: 0.1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".what",
          start: "top 80%",
          end: "top 50%",
        },
      }
    );

    gsap.fromTo(
      ".border-expand",
      {
        scaleX: 0,
        transformOrigin: "center",
      },
      {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".border-expand",
          start: "top 80%",
          end: "top 50%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-full flex flex-col items-center justify-evenly xs:w-full xs:h-full xs:flex xs:justify-evenly">
      <div className="w-11/12 h-1 bg-black border-expand"></div>
      <div className="flex flex-col items-center xs:gap-3">
        <h2 className="text-[4rem] text-center what xs:text-3xl">
          Whatever your brand challenge,
        </h2>
        <h2 className="text-[4rem] text-center what xs:text-3xl">
          Baoiam Partnerships has a
        </h2>
        <h2 className="text-[4rem] text-center what xs:text-3xl">solution.</h2>
      </div>
      <div className="what">
        <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-all ease-in-out text-lg rounded-full talk-btn xs:px-4 xs:py-2 xs:text-base">
          let's talk about it
        </button>
      </div>
      <div className="w-11/12 h-1 bg-black border-expand"></div>

     
    </section>
  );
};

export default Section2;
