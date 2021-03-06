// scripts
import scrollToLocation from "../scripts/scrollToLocation";
// components
import ColorThemeSwitch from "./ColorThemeSwitch";
// data
import navlinks from "../data/navlinks.json";

export default function Navbar() {
  const links = navlinks.map((link) => (
    <li key={link.id} className={`link ${link.class}`}>
      <a href={`${link.href}`} onClick={scrollToLocation}>
        {link.name ? (
          link.name
        ) : (
          <img
            src={require(`../assets/icons/${link.img}`)}
            alt="rocket"
            href="#hero"
            className="logo"
          />
        )}
      </a>
    </li>
  ));
  return (
    <header>
      <nav>
        <ul>{links}</ul>
        <ColorThemeSwitch />
      </nav>
    </header>
  );
}
