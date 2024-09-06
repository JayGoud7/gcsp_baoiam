import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ContactForm from "./components/ContactForm";
import DroppingTexts from "./components/Text-Animation";
import Section from "./components/Text-animation2";
import Textanimation3 from "./components/Text-animation3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Cards from "./components/Cards";

function App() {
  return (
    <main className="w-screen h-screen" data-scroll>
      <Section1 />
      {/* <DroppingTexts /> */}
      {/* <Section2 /> */}
      <Section4 />
      {/* <Section3 /> */}
      {/* <Section /> */}
      {/* <Textanimation3 /> */}
      
      {/* <Section5 /> */}
      <Cards />
      <ContactForm />
    </main>
  );
}

export default App;
