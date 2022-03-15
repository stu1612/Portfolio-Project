import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}
