import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = ({ dark }) => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga consequuntur aliquam voluptatum temporibus fugiat vitae amet doloribus cum repudiandae officiis a quidem, quas illo? Voluptatum earum aliquid quasi consequuntur, sapiente nam hic!";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 6,
        start: "top 60%",
        end: "bottom 85%",
      },
      color: "black",
      stagger: 0.1,
    });

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
          scrub: 6,
        },
      }
    );
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
    return () => {
      anim.kill();
    };
  }, [lettersRef, dark]);

  return (
    <section className=" w-full h-screen flex items-center justify-evenly flex-col xs:py-0">
      <span className="w-11/12 h-1 bg-black border-expand dark:bg-[#EB0027]"></span>
      <div ref={triggerRef} className="px-12  xs:px-8">
        {text.split("").map((letter, index) => (
          <span
            className="font-roboto leading-[6vw] font-medium text-white text-[3.4vw] dark:drop-shadow-[0_0_0.03rem_#EB0027]   drop-shadow-[0_0_0.03rem_rgb(2,2,2)] xs:leading-[9vw]   xs:font-medium xs:text-[6vw]  xs:text-white"
            key={index}
            ref={setlettersRef}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="what">
        <a
          href="#_"
          className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black dark:text-white dark:bg-[#EB0027] dark:border-[#EB0027] border-2 border-black rounded-full hover:text-white  dark:hover:text-[#EB0027] dark:hover:bg-[#EB0027] group"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              strokeWidth="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative">Click</span>
        </a>
      </div>

      <span className="w-11/12 h-1 bg-black border-expand dark:bg-[#EB0027]"></span>
    </section>
  );
};

export default Section2;

