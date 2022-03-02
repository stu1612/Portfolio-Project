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
import t_Data from "../data/tech_data";
import c_Data from "../data/contact_data";

export default function Home({ projects }) {
  const [technologies, setTechnologies] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setTechnologies(t_Data);
  }, []);

  useEffect(() => {
    setContacts(c_Data);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Portfolio projects={projects} />
      <Tech technologies={technologies} />
      <Contact contacts={contacts} />
      <Footer />
    </div>
  );
}
