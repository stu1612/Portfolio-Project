import { useState, useEffect } from "react";
// data
import NavLinksData from "../../../data/navLinksData";
// scripts
import scrollToLocation from "../../../scripts/scrollToLocation";
// style
import "./style.css";

export default function Navigation() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(NavLinksData);
  }, []);

  return (
    <div className="nav">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} onClick={scrollToLocation}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
