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

  const modal = showModal && (
    <Modal project={project} handleClose={handleClose} />
  );

  // functions
  function handleClose() {
    setShowModal(!showModal);
  }

  return (
    <div className="card" onClick={handleClose}>
      <div className="card-wrapper">
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
