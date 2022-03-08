import { useState, useEffect } from "react";
// data
import Data from "../../../data/navlink_data";
// scripts
import scrollToLocation from "../../../scripts/scrollToLocation";
// style
import "./style.css";

export default function Navigation() {
  // Same here, no need to use a hook if the data is read only -1
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(Data);
  }, []);

  const navLinks = links.map((link) => (
    <div className={link.class} key={link.id}>
      <a href={link.url} className="nav-links" onClick={scrollToLocation}>
        {link.name}
      </a>
    </div>
  ));

  return (
    <header>
      <nav className="nav">{navLinks}</nav>
    </header>
  );
}
