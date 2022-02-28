import About from "../components/templates/About/About";
import Contact from "../components/templates/Contact/Contact";
import Footer from "../components/templates/Footer/Footer";
import Hero from "../components/templates/Hero/Hero";
import Portfolio from "../components/templates/Portfolio/Portfolio";
import Tech from "../components/templates/TechStack/Tech";

export default function Home({ data }) {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio data={data} />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}
