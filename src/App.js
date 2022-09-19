import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fill, Results, Login } from "./screens/index.js";
import MainNavbar from "./navbar-footer/MainNavbar";
import Footer from "./navbar-footer/Footer";
import "./firebase";

function App() {
  return (
    <div id="app">
      <MainNavbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/fill" />} />
          <Route path="/fill" element={<Fill />} />
          <Route path="/login" element={<Login />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
