// npm
import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
// components
import CardItem from "../../UI/organisms/CardItem/CardItem";
// styles
import "./style.css";

export default function Modal({ projects }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const cardItem =
    projects &&
    projects
      .filter((project) => project.title === title)
      .map((project) => <CardItem project={project} key={project.id} />);

  function closeModal() {
    navigate("/");
  }

  return ReactDOM.createPortal(
    <div className="modal-background">
      {cardItem}
      <AiFillCloseCircle
        onClick={closeModal}
        className="modal-icon"
        color="white"
        size={32}
      />
      ))
    </div>,
    document.body
  );
}
