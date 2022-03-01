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
    technologies && technologies.map((tech) => <TechCard tech={tech} />);

  return (
    <section className="tech-section page-layout" id="tech">
      <ScreenShape>
        <Title2>Technologies</Title2>
        <TextContent body="Here are the technologies I already know and what I will be learning" />
        <div className="icons-container">{Icons}</div>
      </ScreenShape>
    </section>
  );
}
