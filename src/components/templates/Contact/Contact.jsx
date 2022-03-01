// atoms
import { Title2 } from "../../UI/atoms/Title";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
// styles
import "./style.css";

export default function Contact() {
  return (
    <section className="contact-section page-layout" id="contact">
      <ScreenShape>
        <Title2>Contact</Title2>
        <TextContent body="Here is my contact information if you are intersted in starting a collaboration !" />
      </ScreenShape>
    </section>
  );
}
