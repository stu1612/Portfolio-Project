// npm
import ReactDOM from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
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
      .map((project) => (
        <CardItem project={project} key={project.id} closeModal={closeModal} />
      ));

  function closeModal() {
    navigate("/");
  }

  return ReactDOM.createPortal(
    <div className="modal-background">{cardItem}))</div>,
    document.body
  );
}
