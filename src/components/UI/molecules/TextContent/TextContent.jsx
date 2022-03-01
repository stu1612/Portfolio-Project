import { Paragraph } from "../../atoms/Paragraph";
import "./style.css";

export default function TextContent({ body }) {
  return (
    <div className="text-content">
      <Paragraph>{body}</Paragraph>
    </div>
  );
}
