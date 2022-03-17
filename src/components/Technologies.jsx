// data
import Data from "../data/data";

export default function Technologies() {
  const technolgies = Data.map((tech) => (
    <div className="tech-card" key={tech.id}>
      <div className="tech-img">{tech.img}</div>
      <span>{tech.title}</span>
    </div>
  ));
  return (
    <section className="secondary-bg" id="tech">
      <div className="layout tech">
        <h2 className="h2">Technologies</h2>
        <div className="grid-layout-2 grid-2">
          <div className="grid-2a">
            <p>
              Here are some of the technologies I already know and will be
              starting to learn !
            </p>
          </div>
          <div className="grid-2b">
            <div className="grid-4">{technolgies}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
