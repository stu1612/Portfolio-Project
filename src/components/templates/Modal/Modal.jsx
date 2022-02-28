// npm
import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
// styles
import "./style.css";

export default function Modal({ data }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const cardItem =
    data &&
    data
      .filter((proj) => proj.title === title)
      .map((proj) => <CardItem proj={proj} />);

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
