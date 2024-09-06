import React, { useEffect } from "react";
import gsap from "gsap";
// import video from "../../assets/GSCP/favicon.mp4";

const Section1 = () => {
  useEffect(() => {
    const sentences = gsap.utils.toArray(".sentence");

    const tl = gsap.timeline({ repeat: -1 });

    sentences.forEach((sentence) => {
      const h1s = sentence.querySelectorAll("h1");
      const h2s = sentence.querySelectorAll("h2");
      const spans = sentence.querySelectorAll(".spn");

      tl.fromTo(sentence, { display: "none" }, { display: "flex", duration: 0 })
        .fromTo(
          spans,
          { scaleY: 0, transformOrigin: "center" },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          h1s,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          }
        )
        .fromTo(
          h2s,
          { opacity: 0, x: -35 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "back.inOut",
            stagger: 0.3,
          },

          "-=0"
        )
        .to(sentence, { display: "none", duration: 2 });
    });
  }, []);

  return (
    <>
      <section className="w-full h-screen relative overflow-hidden px-4 xs:px-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src='' type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>

        <div className="text-6xl text-white font-extrabold flex flex-col items-center justify-center w-full h-full relative xs:text-3xl">
          <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] xs:gap-1">
            <h1 className="bg-red-500 p-2 xs:p-1">
              <span className="xs:text-[8vw]">Responsive</span>
            </h1>
            <span className="w-1 h-48 bg-black xs:h-32 spn"></span>
            <h2 className="xs:text-[7.5vw]">Layout</h2>
            <h2 className="xs:text-[7.5vw]">For</h2>
            <h2 className="xs:text-[7.5vw]">Us.</h2>
          </div>
          <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[49%] transform -translate-x-[50%] -translate-y-[50%] xs:gap-1">
            <h1 className="bg-red-500 p-2 xs:p-1">
              <span className="xs:text-[8vw]">Responsive</span>
            </h1>
            <span className="w-1 h-48 bg-black xs:h-32 spn"></span>
            <h2 className="xs:text-[7.5vw]">Better</h2>
            <h2 className="xs:text-[7.5vw]">World.</h2>
          </div>
          <div className="sentence gap-4 flex items-center text-center absolute top-[50%] left-[42%] transform -translate-x-[50%] -translate-y-[50%] xs:gap-1">
            <h1 className="bg-red-500 p-2 xs:p-1">
              <span className="xs:text-[8vw]">Responsive</span>
            </h1>
            <span className="w-1 h-48 bg-black xs:h-32 spn"></span>
            <h2 className="xs:text-[7.5vw]">For</h2>
            <h2 className="xs:text-[7.5vw]">Us.</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
