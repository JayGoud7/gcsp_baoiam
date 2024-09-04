import React, { useEffect } from "react";
import gsap from "gsap";

const Section1 = () => {
  useEffect(() => {
    const sentences = gsap.utils.toArray(".sentence");

    const tl = gsap.timeline({ repeat: -1 });

    sentences.forEach((sentence) => {
      const h1s = sentence.querySelectorAll("h1");
      const h2s = sentence.querySelectorAll("h2");

      tl.fromTo(sentence, { display: "none" }, { display: "flex", duration: 0 })
        .fromTo(
          h1s,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
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
          // Start h2 animation before h1 finishes
          "-=0.3"
        )
        .to(sentence, { display: "none", duration: 2 });
    });
  }, []);

  return (
    <>
      <section className="w-full h-full relative overflow-hidden xs:w-full xs:h-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src="./favicon.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>

        <div className="text-6xl text-white font-extrabold flex flex-col items-center justify-center w-full h-full relative xs:text-3xl xs:gap-2">
          <div className="sentence gap-4 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:flex xs:flex-col xs:gap-2">
            <h1 className="bg-red-500 p-2 xs:p-1">
              <span>Responsive</span>
            </h1>
            <h2 className="xs:text-2xl">Layout</h2>
            <h2 className="xs:text-2xl">For</h2>
            <h2 className="xs:text-2xl">Us.</h2>
          </div>
          <div className="sentence gap-4 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:flex xs:flex-col xs:gap-2">
            <h1 className="bg-red-500 p-2 xs:p-1">
              <span>Responsive</span>
            </h1>
            <h2 className="xs:text-2xl">Better</h2>
            <h2 className="xs:text-2xl">World.</h2>
          </div>
          <div className="sentence gap-4 flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:flex xs:flex-col xs:gap-2">
            <h1 className="bg-red-500 p-2 xs:p-1">
              <span>Responsive</span>
            </h1>
            <h2 className="xs:text-2xl">For</h2>
            <h2 className="xs:text-2xl">Us.</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
