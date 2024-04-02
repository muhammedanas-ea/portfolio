import Navebar from "./component/Navebar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Works from "./component/Works";
import Contact from "./component/Contact";
import "./App.css";


export default function App() {
  return (
    <div className="bg-[#000300]">
      <Navebar />
      <Hero />
      <Skills/>
      <Works />
      <Contact />
    </div>
  );
}
