import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import "./style.css";

export default function Tech() {
  return (
    <div className="tech-section page-layout" id="tech">
      <ScreenShape>
        <TextContent
          title="Tech Stack"
          body="Here are the technologies I already know and what I will be learning"
        />
      </ScreenShape>
    </div>
  );
}
