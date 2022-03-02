import "./style.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function CloseIcon({ clickHandler }) {
  return (
    <AiFillCloseCircle
      onClick={clickHandler}
      className="modal-icon"
      color="white"
      size={32}
    />
  );
}
