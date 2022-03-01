import { useState, useEffect } from "react";
// data
import Data from "../../../data/navlink_data";
// scripts
import scrollToLocation from "../../../scripts/scrollToLocation";
// style
import "./style.css";

export default function Navigation() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(Data);
  }, []);

  return (
    <nav className="nav">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} onClick={scrollToLocation}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
