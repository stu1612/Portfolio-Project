import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";

import "./style.css";

export default function Modal({ data }) {
  const { title } = useParams();
  const navigate = useNavigate();

  function closeModal() {
    navigate("/");
  }

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">
        {data
          .filter((project) => project.title === title)
          .map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <button>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  URL
                </a>
              </button>
              <button>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
              </button>
              <button onClick={closeModal}>Close</button>
            </div>
          ))}
      </div>
    </div>,
    document.body
  );
}
