//npm
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// styles
import "./style.css";

export default function Footer() {
  // const ContactItem = data.map((item) => {
  //   <div className="wrapper">
  //     <a
  //       href={item.link}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       {/* Use another way to past a icon */}
  //       <FaLinkedin size={28} color="#c6c6c6" />
  //     </a>
  //   </div>;
  // });

  return (
    <footer className="footer-section">
      <div className="footer-links">
        {/* To can refactor the linkedIn and github links into a component called contact item */}
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
