import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <FaLinkedin size={28} />
        <FaGithub size={28} />
      </div>
      <p>&#169; 2022 | Stuart Bolderson</p>
    </div>
  );
}
