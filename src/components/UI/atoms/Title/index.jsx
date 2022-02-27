import PropTypes from "prop-types";
import "./style.css";

export const Title1 = (props) => <h1 className="title_1">{props.text}</h1>;

export const Title2 = (props) => <h2 className="title_2">{props.text}</h2>;

export const Title3 = (props) => <h3 className="title_3">{props.text}</h3>;

Title1.propTypes = {
  text: PropTypes.string.isRequired,
};

Title2.propTypes = {
  text: PropTypes.string.isRequired,
};

Title3.propTypes = {
  text: PropTypes.string.isRequired,
};
