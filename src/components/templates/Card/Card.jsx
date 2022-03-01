// npm
import { useNavigate } from "react-router-dom";
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
      <div className="relative">
        {comingSoon}
        <img src={project.cardImg} alt={project.alt} className="card-img" />
      </div>
      <div className="card-content">
        <Title3>{project.projName}</Title3>
      </div>
    </div>
  );
}
