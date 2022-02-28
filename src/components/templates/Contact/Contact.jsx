import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
import "./style.css";

export default function Contact() {
  return (
    <div className="contact-section page-layout" id="contact">
      <ScreenShape>
        <TextContent
          title="Contact"
          body="Here is my contact information if you are intersted in starting a collaboration !"
        />
      </ScreenShape>
    </div>
  );
}
