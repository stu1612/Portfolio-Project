import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";
import Modal from "./components/templates/Modal/Modal";
import Projects from "./data/projects";
import Navigation from "./components/templates/Navigation/Navigation";

export default function App() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(Projects);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/stu1612" element={<Home data={projectData} />} />
          <Route path="/:title" element={<Modal data={projectData} />} />
          <Route path="*" element={<Navigate to="/stu1612" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
