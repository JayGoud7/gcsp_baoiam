import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const animations = [
  {
    id: "one",
    color: "text-[#24a8e6]",
    from: { x: -150, y: -50, rotation: -180, scale: 3 },
    to: { x: 0, y: 0, rotation: 0, scale: 1 },
  },
  {
    id: "two",
    color: "text-[#a5cb21]",
    from: { x: 200, y: -100, scale: 2 },
    to: { x: 0, y: 0, scale: 1 },
  },
  {
    id: "three",
    color: "text-[#b10e81]",
    from: { x: -300, scale: 0 },
    to: { x: 0, scale: 1 },
  },
  {
    id: "four",
    color: "text-[#8d6a00]",
    from: { y: -100, rotation: 360, scale: 0 },
    to: { y: 0, rotation: 0, scale: 1 },
  },
  {
    id: "five",
    color: "text-[#dd3f0f]",
    from: { y: -100, rotation: 360, scale: 0 },
    to: { y: 0, rotation: 0, scale: 1 },
  },
  {
    id: "six",
    color: "text-[#ddb40f]",
    from: { rotation: -180, x: 150 },
    to: { rotation: 0, x: 0 },
  },
  {
    id: "seven",
    color: "text-[#348c04]",
    from: { x: -150, scale: 0.3 },
    to: { x: 0, scale: 1 },
  },
];

const AnimateText = ({ animation, text, onComplete }) => {
  const textRefs = useRef([]);
  const [animationTimeline, setAnimationTimeline] = useState(null);

  useEffect(() => {
    if (animationTimeline) {
      animationTimeline.kill();
    }

    const tl = gsap.timeline({ onComplete: () => onComplete() });

    textRefs.current.forEach((span, index) => {
      tl.fromTo(
        span,
        { ...animation.from, opacity: 0 },
        {
          ...animation.to,
          opacity: 1,
          delay: index * 0.05,
          duration: 0.5,
          ease: "power2.out",
        },
        index * 0.05
      );
    });

    setAnimationTimeline(tl);
  }, [animation, onComplete]);

  return (
    <div className="w-full text-center">
      <div className="flex  justify-center border-b-2 border-gray-300 py-4 mb-4">
        {text.split("").map((letter, i) => (
          <span
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            className={`  text-xl md:text-7xl ${animation.color}`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

const Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animations.length);
    }, 1000); // Delay before starting the next animation
  };

  // Replace the text with the provided options
  const texts = [
    "Responsive Layout For Us.",
    "Responsive With Us",
    "Responsive For Us",
  ];
  const text = texts[currentIndex % texts.length];

  return (
    <div className="container mx-auto py-10">
      {animations.length > 0 && (
        <AnimateText
          animation={animations[currentIndex]}
          text={text}
          onComplete={handleAnimationComplete}
        />
      )}
    </div>
  );
};

export default Section;