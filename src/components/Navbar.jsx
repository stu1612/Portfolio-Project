// scripts
import scrollToLocation from "../scripts/scrollToLocation";
// components
import ColorThemeSwitch from "./ColorThemeSwitch";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li className="link link-one">
            <a href="/#about" onClick={scrollToLocation}>
              About
            </a>
          </li>
          <li className="link link-two">
            <a href="/#projects" onClick={scrollToLocation}>
              Projects
            </a>
          </li>
          <li className="link link-three">
            <a href="/#hero" onClick={scrollToLocation}>
              Home
            </a>
          </li>
          <li className="link link-four">
            <a href="/#technologies" onClick={scrollToLocation}>
              Tech
            </a>
          </li>
          <li className="link link-five">
            <a href="/#contact" onClick={scrollToLocation}>
              Contact
            </a>
          </li>
        </ul>
        <ColorThemeSwitch />
      </nav>
    </header>
  );
}
