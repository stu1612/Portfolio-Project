import { Title2 } from "../../UI/atoms/Title";
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import "./style.css";

export default function Tech() {
  return (
    <div className="tech-section page-layout" id="tech">
      <ScreenShape>
        <Title2>Technologies</Title2>
        <TextContent body="Here are the technologies I already know and what I will be learning" />
      </ScreenShape>
    </div>
  );
}
