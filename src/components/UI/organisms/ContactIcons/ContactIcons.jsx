import { AiOutlineMail } from "react-icons/ai";
import { ImMobile } from "react-icons/im";
import { ImLocation } from "react-icons/im";

import { Title3 } from "../../atoms/Title";
import "./style.css";

export default function ContactIcons() {
  return (
    <div>
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
    </div>
  );
}
