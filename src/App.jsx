import Navebar from "./component/Navebar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Works from "./component/Works";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./App.css";
import { useRef } from "react";

export default function App() {
  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    works: useRef(null),
    contact: useRef(null),
  };
  const scrollTosection = (elementRef) => {
    window.scrollTo({
      top: sectionRefs[elementRef].current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#000300]">
      <Navebar scrollTosection={scrollTosection} />
      <div ref={sectionRefs.home}>
        <Hero />
      </div>
      <div ref={sectionRefs.skills}>
        <Skills />
      </div>
      <div ref={sectionRefs.works}>
        <Works />
      </div>
      <div ref={sectionRefs.contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
