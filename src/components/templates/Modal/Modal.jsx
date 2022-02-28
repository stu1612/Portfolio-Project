// npm
import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { Title3 } from "../../UI/atoms/Title";
// styles
import "./style.css";

export default function Modal({ data }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const cardItem =
    data &&
    data
      .filter((proj) => proj.title === title)
      .map((proj) => (
        <div key={proj.id}>
          <Title3>{proj.title}</Title3>
          <p>{proj.body}</p>
          {proj.pills.map((pill) => (
            <p>{pill}</p>
          ))}
          <button>
            <a href={proj.url} target="_blank" rel="noopener noreferrer">
              URL
            </a>
          </button>
          <button>
            <a href={proj.repo} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </button>
        </div>
      ));

  function closeModal() {
    navigate("/");
  }

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">
        {cardItem}
        <button onClick={closeModal}>Close</button>
      </div>
      ))
    </div>,
    document.body
  );
}
