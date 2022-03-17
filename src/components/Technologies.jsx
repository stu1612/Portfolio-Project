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
    <section className="primary-bg" id="tech">
      <div className="layout">
        <h2 className="h2-about">Technologies</h2>
        <div className="grid-layout-2 grid-2">
          <div className="grid-2_item-1">
            <p>
              Here are the projects I will be making during the Frontend course
              with Novare Potential
            </p>
          </div>
          <div className="grid-2_item-2 box">
            <div className="grid-4">{technolgies}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
