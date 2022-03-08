import PropTypes from "prop-types";
import "./style.css";

// Here, as we have done on the Todo CSS, not everything needs to be a React component. This just can be a img tag and a CSS fil
export const Paragraph = ({ children }) => (
  <p className="paragraph">{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
};
