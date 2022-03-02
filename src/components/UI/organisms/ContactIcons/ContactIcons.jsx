// atoms
import { Title3 } from "../../atoms/Title";
// style
import "./style.css";

export default function ContactIcons({ contact }) {
  const { icon, link, title } = contact;

  return (
    <div className="contact-wrapper">
      <div className="icon-wrapper">{icon}</div>
      <a href={link}>
        <Title3>{title}</Title3>
      </a>
    </div>
  );
}
