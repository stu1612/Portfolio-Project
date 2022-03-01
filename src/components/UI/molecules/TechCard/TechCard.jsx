import { Paragraph } from "../../atoms/Paragraph";

import "./style.css";

export default function TechCard({ tech }) {
  return (
    <div className="container">
      <div className="tech-icon">{tech.img}</div>
      <Paragraph>{tech.title}</Paragraph>
    </div>
  );
}
