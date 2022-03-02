// atoms
import { Title2 } from "../../UI/atoms/Title";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TechCard from "../../UI/molecules/TechCard/TechCard";
import TextContent from "../../UI/molecules/TextContent/TextContent";
// styles
import "./style.css";

export default function Tech({ technologies }) {
  const Icons =
    technologies &&
    technologies.map((tech) => <TechCard tech={tech} key={tech.id} />);

  return (
    <section className="tech-section page-layout" id="tech">
      <ScreenShape>
        <div className="flex-start">
          <Title2>Technologies</Title2>
        </div>
        <div className="flex-container">
          <TextContent body="Here are the technologies I already know and what I will be learning" />
          <div className="icons-container">{Icons}</div>
        </div>
      </ScreenShape>
    </section>
  );
}
