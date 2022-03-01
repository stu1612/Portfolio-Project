// atoms
import { Title2, Title3 } from "../../UI/atoms/Title";
// molecules
import ScreenShape from "../../UI/molecules/ScreenShape/ScreenShape";
import TextContent from "../../UI/molecules/TextContent/TextContent";
// styles
import "./style.css";

import { AiOutlineMail } from "react-icons/ai";
import { ImMobile } from "react-icons/im";
import { ImLocation } from "react-icons/im";

export default function Contact() {
  return (
    <section className="contact-section page-layout" id="contact">
      <ScreenShape>
        <Title2>Contact</Title2>
        <TextContent body="Here is my contact information if you are intersted in starting a collaboration !" />
        <div className="contact-wrapper">
          <div className="icon-wrapper">
            <AiOutlineMail size={20} />
          </div>
          <Title3>stu.bolderson@aol.com</Title3>
        </div>
        <div className="contact-wrapper">
          <div className="icon-wrapper">
            <ImMobile size={20} />
          </div>
          <Title3>+46 70 857 7935</Title3>
        </div>
        <div className="contact-wrapper">
          <div className="icon-wrapper">
            <ImLocation size={20} />
          </div>
          <Title3>Lund, Sweden</Title3>
        </div>
      </ScreenShape>
    </section>
  );
}
