import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fill, Results } from "./screens/index.js";
import MainNavbar from "./navbar-footer/MainNavbar";

function App() {
  return (
    <div id="app">
      <MainNavbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/fill" />} />
          <Route path="/fill" element={<Fill />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;
