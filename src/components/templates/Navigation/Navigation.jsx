import { useState, useEffect } from "react";
// data
import Data from "../../../data/navlink_data";
// scripts
import scrollToLocation from "../../../scripts/scrollToLocation";
// style
import "./style.css";
import Logo from "../../UI/molecules/Logo/Logo";

export default function Navigation() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(Data);
  }, []);

  return (
    <header>
      <nav className="nav">
        <div className="one">
          <a href="#about" className="nav-links" onClick={scrollToLocation}>
            About
          </a>
        </div>
        <div className="two">
          <a href="#projects" className="nav-links" onClick={scrollToLocation}>
            Projects
          </a>
        </div>
        <div className="three">
          <Logo />
        </div>
        <div className="four">
          <a href="#tech" className="nav-links" onClick={scrollToLocation}>
            Tech
          </a>
        </div>
        <div className="five">
          <a href="#contact" className="nav-links" onClick={scrollToLocation}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
