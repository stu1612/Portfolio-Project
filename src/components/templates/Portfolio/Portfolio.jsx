import { Title2 } from "../../UI/atoms/Title";
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import Card from "../Card/Card";
import "./style.css";

export default function Portfolio({ projects }) {
  const projectCards =
    projects &&
    projects.map((project) => <Card key={project.id} project={project} />);

  return (
    <div className="project-section page-layout" id="projects">
      <ScreenShape>
        <Title2>Projects</Title2>
        <TextContent body="Here are the projects I will be making during the Intensive Frontend Course with Novare Potential" />
        <div className="cards-container">{projectCards}</div>
      </ScreenShape>
    </div>
  );
}
