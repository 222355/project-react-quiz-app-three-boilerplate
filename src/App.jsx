import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Questions from "./Components/Questions";
import Result from "./Components/Result";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}
