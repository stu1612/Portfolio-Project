//npm
import { useState } from "react";
// components
import Modal from "./Modal";

export default function Project({ project }) {
  const [showModal, setShowModal] = useState(false);

  // properties
  const { image, isActive, alt } = project;

  const comingSoon = !isActive && (
    <div className="coming-soon">
      <p>Coming Soon</p>
    </div>
  );

  const modal =
    isActive && showModal ? (
      <Modal project={project} toggleModal={toggleModal} />
    ) : null;

  // functions
  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="project-item" onClick={toggleModal}>
      <div className="item-wrapper">
        {comingSoon}
        <img
          src={require(`../assets/images/cards/${image}`)}
          alt={alt}
          className="card-image"
        />
      </div>
      {modal}
    </div>
  );
}
