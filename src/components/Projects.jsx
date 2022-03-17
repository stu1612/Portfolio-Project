// components
import Project from "./Project";
// data
import projects from "../data/projects.json";

export default function Projects() {
  // properties
  const projectItems = projects.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <section className="secondary-bg" id="projects">
      <div className="layout">
        <h2 className="h2-about">Projects</h2>
        <div className="grid-layout-2 grid-2">
          <div className="grid-2_item-1">
            <p>
              Here are the projects I will be making during the Frontend course
              with Novare Potential
            </p>
          </div>
          <div className="grid-2_item-2 box">
            <div className="grid-3">{projectItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
