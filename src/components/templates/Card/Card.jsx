// npm
import { Link } from "react-router-dom";
// styles
import { Title2 } from "../../UI/atoms/Title";
import "./style.css";

export default function Card({ project }) {
  return (
    <div className="card">
      <Title2>{project.title}</Title2>
      {project.isActive && <Link to={`/${project.title}`}>Read more..</Link>}
    </div>
  );
}
