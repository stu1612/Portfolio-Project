// npm
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/stuartbolderson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} className="footer-icon" />
        </a>
        <a href="mailto:"></a>
        <a
          href="https://github.com/stu1612"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} className="footer-icon" />
        </a>
      </div>
      <p>&#169; 2022 | Stuart Bolderson</p>
    </div>
  );
}
