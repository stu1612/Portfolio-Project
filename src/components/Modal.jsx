import ReactDOM from "react-dom";

export default function Modal({ project, toggleModal }) {
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
          <p className="modal-p">{name}</p>
          <p className="modal-p">{body}</p>
          <div className="pills-container">{pillItems}</div>
          <div className="button-container">
            <button className="btn primary">Visit website</button>
            <button className="btn secondary">Git repository</button>
          </div>
        </div>
        <p className="close" onClick={toggleModal}>
          X
        </p>
      </div>
    </div>,
    document.body
  );
}
