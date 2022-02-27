import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";
import Modal from "./components/templates/Modal/Modal";

function App() {
  const data = [
    {
      id: 1,
      title: "Project One",
      body: "This is text from Project One",
    },
    {
      id: 2,
      title: "Project Two",
      body: "This is text from Project Two",
    },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          {/* <Home data={data} />
          </Route> */}
          <Route path="/:title" element={<Modal data={data} />} />
          {/* <Modal  />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
