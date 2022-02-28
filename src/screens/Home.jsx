// import Card from "../components/templates/Card/Card";

import About from "../components/templates/About/About";
import Contact from "../components/templates/Contact/Contact";
import Footer from "../components/templates/Footer/Footer";
import Hero from "../components/templates/Hero/Hero";
import Portfolio from "../components/templates/Portfolio/Portfolio";
import Tech from "../components/templates/TechStack/Tech";

export default function Home({ data }) {
  return (
    <div>
      {/* {data &&
        data.map((project) => (
          <Card key={project.id} project={project} data={data} />
        ))} */}
      <Hero />
      <About />
      <Portfolio />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}
