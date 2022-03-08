//npm
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// styles
import "./App.css";
// screens
import Home from "./screens/Home";
// components
import Modal from "./components/templates/Modal/Modal";
import Navigation from "./components/templates/Navigation/Navigation";
// data
import Data from "./data/project_data";

export default function App() {
  // No need to use a hook if the data will not mutete -1
  // Confirmed by doing a quick search, nobody calls setProjects()
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Data);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        {/* You arent using a true modal for the project -1 */}
        <Routes>
          <Route path="/stu1612" element={<Home projects={projects} />} />
          <Route path="/:title" element={<Modal projects={projects} />} />
          <Route path="*" element={<Navigate to="/stu1612" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
