import PropTypes from "prop-types";
import "./style.css";

export const Paragraph = (props) => <p className="paragraph">{props.text}</p>;

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};
