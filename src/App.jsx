import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";
import Modal from "./components/templates/Modal/Modal";
import Data from "./data/project_data";
import Navigation from "./components/templates/Navigation/Navigation";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Data);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/stu1612" element={<Home projects={projects} />} />
          <Route path="/:title" element={<Modal projects={projects} />} />
          <Route path="*" element={<Navigate to="/stu1612" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
