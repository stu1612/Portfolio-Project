import { Link } from "react-router-dom";

import { Title2 } from "../../UI/atoms/Title";
import "./style.css";

export default function Card({ project }) {
  return (
    <div className="card">
      <Title2>{project.title}</Title2>
      <Link to={`/${project.title}`}>Read more..</Link>
    </div>
  );
}
