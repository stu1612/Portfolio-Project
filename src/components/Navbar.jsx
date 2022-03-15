import scrollToLocation from "../scripts/scrollToLocation";
import ColorThemeSwitch from "./ColorThemeSwitch";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/#about" onClick={scrollToLocation}>
            About
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={scrollToLocation}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#hero" onClick={scrollToLocation}>
            Home
          </a>
        </li>
        <li>
          <a href="/#technologies" onClick={scrollToLocation}>
            Technologies
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={scrollToLocation}>
            Contact
          </a>
        </li>
        <li>
          <ColorThemeSwitch />
        </li>
      </ul>
    </nav>
  );
}
