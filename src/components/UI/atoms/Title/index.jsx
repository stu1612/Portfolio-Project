import PropTypes from "prop-types";
import "./style.css";

export const Title1 = ({ children }) => <h1 className="title_1">{children}</h1>;

export const Title2 = ({ children }) => <h2 className="title_2">{children}</h2>;

export const Title3 = ({ children }) => <h3 className="title_3">{children}</h3>;

Title1.propTypes = {
  children: PropTypes.any.isRequired,
};

Title2.propTypes = {
  children: PropTypes.any.isRequired,
};

Title3.propTypes = {
  children: PropTypes.any.isRequired,
};
