// npm
import { useNavigate } from "react-router-dom";
// atoms
import { Title3 } from "../../atoms/Title";
// styles
import "./style.css";

// good
export default function Card({ project }) {
  const navigate = useNavigate();

  const { isActive, title, name, alt, image } = project;

  /**
   *
   * Note:
   * This could be done soo much easily using the portal.
   *
   */
  function openActiveCard() {
    if (isActive) {
      navigate(`/${title}`);
    } else {
      return;
    }
  }

  const comingSoon = !isActive && (
    <div className="coming-soon">
      <p className="light-text">Coming Soon</p>
    </div>
  );

  return (
    <div className="card" onClick={openActiveCard}>
      <div className="relative">
        {comingSoon}
        <img src={image} alt={alt} className="card-img" />
      </div>
      <div className="card-content">
        <Title3>{name}</Title3>
      </div>
    </div>
  );
}
