import ReactDOM from "react-dom";

export default function Modal({ project, toggleModal }) {
  console.log(project);

  const { name, body, alt, screenshot, pills, url, repo } = project;

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
          <h3>{name}</h3>
          <p className="modal-p">{body}</p>
          <div className="pills-container">{pillItems}</div>
          <div className="button-container">
            <a
              href={url}
              target="_blank"
              className="btn primary"
              rel="noreferrer"
            >
              Visit website
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Git repository
            </a>
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
