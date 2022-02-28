import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import Card from "../Card/Card";
import "./style.css";

export default function Portfolio({ data }) {
  // const projectCards =
  //   data &&
  //   data.map((project) => (
  //     <Card key={project.id} project={project} data={data} />
  //   ));

  return (
    <div className="project-section page-layout" id="projects">
      <ScreenShape>
        <TextContent
          title="Projects"
          body="Here are the projects I will be making during the Intensive Frontend Course with Novare Potential"
        />
      </ScreenShape>
      {/* <div className="cards-container">{projectCards}</div> */}
    </div>
  );
}
