import { Paragraph } from "../../atoms/Paragraph";
import { Title2 } from "../../atoms/Title";
import "./style.css";

export default function TextContent({ title, body }) {
  return (
    <div className="text-content">
      <Title2>{title}</Title2>
      <Paragraph>{body}</Paragraph>
    </div>
  );
}
