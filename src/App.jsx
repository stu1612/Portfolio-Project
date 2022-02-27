import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";
import Modal from "./components/templates/Modal/Modal";
import ProjectData from "./data/projectData";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ProjectData);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/:title" element={<Modal data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
