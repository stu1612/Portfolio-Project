import { useState } from "react";
import "./App.css";
import Modal from "./components/templates/Modal/Modal";
import { Title1 } from "./components/UI/atoms/Title";
import Home from "./screens/Home";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="App">
      <Home />

      <button onClick={handleOpenModal}>Open Modal</button>

      {showModal && (
        <Modal>
          <Title1 text="Hello Modal" />
          <button onClick={handleCloseModal}>close</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
