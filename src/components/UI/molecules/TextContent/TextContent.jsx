import { Paragraph } from "../../atoms/Paragraph";
import "./style.css";

export default function TextContent({ body, customStyle }) {
  return (
    <div className={`text-content ${customStyle}`}>
      <Paragraph>{body}</Paragraph>
    </div>
  );
}
