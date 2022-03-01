// atoms
import { Title2 } from "../../UI/atoms/Title";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
// organism
import Card from "../../UI/organisms/Card/Card";
// styles
import "./style.css";

export default function Portfolio({ projects }) {
  const projectCards =
    projects &&
    projects.map((project) => <Card key={project.id} project={project} />);

  return (
    <section className="project-section page-layout" id="projects">
      <ScreenShape>
        <div className="flex-start">
          <Title2>Projects</Title2>
        </div>
        <div className="flex-container">
          <TextContent body="Here are the projects I will be making during the Intensive Frontend Course with Novare Potential" />
          <div className="cards-container">{projectCards}</div>
        </div>
      </ScreenShape>
    </section>
  );
}
