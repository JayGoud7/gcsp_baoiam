import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const DroppingTexts = () => {
  const textsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a timeline using gsap.timeline()
    const tl = gsap.timeline({ repeat: -1 });

    // Background color animation synced with text changes
    ["#ff0075", "#0094ff", "#b200ff", "#8BC34A", "#F44336"].forEach(
      (color, index) => {
        tl.to(
          containerRef.current,
          {
            backgroundColor: color,
            duration: 1.5, // Make the background change duration same as the text animation
            ease: "none",
          },
          `-=${index === 0 ? 0 : 1.5}`
        ); // Sync it with the text animation
      }
    );

    // Animate text: appearance and disappearance for each
    textsRef.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { fontSize: "0px", opacity: 0, x: "-30px", y: "0px", rotate: -25 },
        {
          fontSize: "36px",
          opacity: 1.5,
          x: "0px",
          y: "0px",
          rotate: 0,
          duration: 1, // Adjusted to match background transition duration
          ease: "power1.inOut",
        },
        `-=${1.25}` // Sync with the background transition
      ).to(
        el,
        {
          duration: 1,
          opacity: 0,
          x: "30px",
          y: "100px",
          rotate: 15,
          fontSize: "0px",
          ease: "power1.inOut",
        },
        `+=0` // Immediate disappearance after the animation
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center h-screen text-white overflow-hidden"
    >
     

      <div className="dropping-texts inline-block w-48 h-9 text-left relative">
        {["Developers", "Designers", "Coders", "EVERYONE!"].map((text, i) => (
          <div
            key={i}
            ref={(el) => (textsRef.current[i] = el)}
            className="absolute text-2xl font-light shadow-md"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppingTexts;
