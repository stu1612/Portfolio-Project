import ReactDOM from "react-dom";

export default function Modal({ project, handleClose }) {
  const { name, body, alt, screenshot, pills } = project;

  const pillItems = pills.map((pill, index) => (
    <li key={index} className="pill">
      {pill}
    </li>
  ));

  return ReactDOM.createPortal(
    <div className="modal-background">
      <div className="modal">
        <div className="modal-image-wrapper">
          <img src={require(`../assets/screenshots/${screenshot}`)} alt={alt} />
        </div>
        <div className="modal-content">
          <p>{name}</p>
          <p>{body}</p>
          <div className="pills-container">{pillItems}</div>
          <div className="button-container">
            <button className="btn primary">Add</button>
            <button className="btn secondary">DELETE</button>
          </div>
        </div>
        <p className="close" onClick={handleClose}>
          X
        </p>
      </div>
    </div>,
    document.body
  );
}
