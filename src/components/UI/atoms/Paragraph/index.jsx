import PropTypes from "prop-types";
import "./style.css";

export const Paragraph = ({ children }) => (
  <p className="paragraph">{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
};
