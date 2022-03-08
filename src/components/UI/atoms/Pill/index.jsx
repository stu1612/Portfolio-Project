import "./style.css";

// Here, as we have done on the Todo CSS, not everything needs to be a React component. This just can be a img tag and a CSS fil

export default function index({ text }) {
  return <div className="pill">{text}</div>;
}
