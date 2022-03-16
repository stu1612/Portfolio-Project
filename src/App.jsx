//npm
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// screens
import Home from "./screens/Home";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/stu1612" element={<Home />} />
          {/* <Route path="/:title" element={<Modal  />} /> */}
          <Route path="*" element={<Navigate to="/stu1612" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
