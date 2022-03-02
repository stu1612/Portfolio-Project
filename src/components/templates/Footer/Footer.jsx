//npm
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// styles
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-links">
        <div className="wrapper">
          <a
            href="https://www.linkedin.com/in/stuartbolderson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} color="#c6c6c6" />
          </a>
        </div>
        <div className="wrapper">
          <a
            href="https://github.com/stu1612"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} color="#c6c6c6" />
          </a>
        </div>
      </div>
      <span>&#169; 2022 * Stu Bolderson</span>
    </footer>
  );
}
