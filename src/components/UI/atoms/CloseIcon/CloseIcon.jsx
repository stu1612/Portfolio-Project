import "./style.css";
import { AiFillCloseCircle } from "react-icons/ai";

// Here, as we have done on the Todo CSS, not everything needs to be a React component. This just can be a img tag and a CSS fil
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
