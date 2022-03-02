import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/icons/logo.png";
import "./style.css";

export default function Logo() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }
  return (
    <div className="logo">
      <img
        src={logo}
        alt="programing sign within circle"
        onClick={navigateToHome}
        className="logo"
      />
    </div>
  );
}
