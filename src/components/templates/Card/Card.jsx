// npm
import { useNavigate } from "react-router-dom";
import { Paragraph } from "../../UI/atoms/Paragraph";
// styles
import { Title3 } from "../../UI/atoms/Title";
import "./style.css";

export default function Card({ project }) {
  const navigate = useNavigate();

  function openActiveCard() {
    if (project.isActive) {
      navigate(`/${project.title}`);
    } else {
      return;
    }
  }

  const comingSoon = !project.isActive && (
    <div className="coming-soon">
      <p className="light-text">Coming Soon</p>
    </div>
  );

  return (
    <div className="card" onClick={openActiveCard}>
      <div className="image-wrapper relative">
        {comingSoon}
        <img src={project.cardImg} alt="hello" className="img-150" />
      </div>
      <div className="card-content">
        <Title3>{project.projName}</Title3>
      </div>
    </div>
  );
}
