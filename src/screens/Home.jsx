//npm
import { useState, useEffect } from "react";
// components
import About from "../components/templates/About/About";
import Contact from "../components/templates/Contact/Contact";
import Footer from "../components/templates/Footer/Footer";
import Hero from "../components/templates/Hero/Hero";
import Portfolio from "../components/templates/Portfolio/Portfolio";
import Tech from "../components/templates/TechStack/Tech";
// data
import TechIcons from "../data/tech_data";

export default function Home({ projects }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setTechnologies(TechIcons);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <Tech technologies={technologies} />
      <Contact />
      <Footer />
    </div>
  );
}
