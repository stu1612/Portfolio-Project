// components
import ProjectItem from "./ProjectItem";
// data
import projects from "../data/projects.json";

export default function Projects() {
  // properties
  const projectItems = projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ));
  return (
    <section className="primary-bg" id="projects">
      <div className="layout projects">
        <h2 className="h2">Projects</h2>
        <div className="grid-layout-2 grid-2">
          <div className="grid-2a">
            <p>
              Here are the projects I will be making during the Frontend course
              with Novare Potential
            </p>
          </div>
          <div className="grid-2b">
            <div className="grid-3">{projectItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
