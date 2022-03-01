import { useNavigate } from "react-router-dom";
import { GiFist } from "react-icons/gi";
import "./style.css";

export default function Logo() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }
  return (
    <div className="logo">
      <GiFist size={32} color="#b1d3e3" onClick={navigateToHome} />
    </div>
  );
}
