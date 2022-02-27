import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

import "./style.css";

export default function Modal({ data }) {
  const { title } = useParams();

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">
        {data
          .filter((project) => project.title === title)
          .map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </div>
          ))}
      </div>
    </div>,
    document.body
  );
}
