import "./style.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-links">
        <div className="wrapper">
          <FaLinkedin size={28} color="#c6c6c6" />
        </div>
        <div className="wrapper">
          <FaGithub size={28} color="#c6c6c6" />
        </div>
      </div>
      <span>&#169; 2022 * Stu Bolderson</span>
    </footer>
  );
}
