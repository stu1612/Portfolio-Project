//npm
import { useState, useEffect } from "react";
// atoms
import { Title3 } from "../../atoms/Title";
// style
import "./style.css";
// data
import Data from "../../../../data/contact_data";

export default function ContactIcons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  const contactLinks =
    data &&
    data.map((contact) => (
      <div className="contact-wrapper">
        <div className="icon-wrapper">{contact.icon}</div>
        <a href={contact.link}>
          <Title3>{contact.title}</Title3>
        </a>
      </div>
    ));

  return <div>{contactLinks}</div>;
}
