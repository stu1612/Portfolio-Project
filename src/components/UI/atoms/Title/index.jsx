import PropTypes from "prop-types";
import "./style.css";

export const Title = (props) => <h1 className="title_1">{props.text}</h1>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
