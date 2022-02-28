import Card from "../Card/Card";
import "./style.css";

export default function Portfolio({ data }) {
  const projectCards =
    data &&
    data.map((project) => (
      <Card key={project.id} project={project} data={data} />
    ));

  return (
    <div className="project-section" id="projects">
      <div className="cards-container">{projectCards}</div>
    </div>
  );
}
