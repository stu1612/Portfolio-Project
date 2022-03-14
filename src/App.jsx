//npm
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// screens
import Home from "./screens/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/stu1612" element={<Home />} />
          {/* <Route path="/:title" element={<Modal  />} /> */}
          <Route path="*" element={<Navigate to="/stu1612" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
