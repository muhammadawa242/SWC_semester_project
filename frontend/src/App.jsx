import React from "react";
import Register from "./components/Register";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes will be defined here */}
        {/* <Route path="/" element={<Signin />} /> */}
        <Route path="/signin" element={<Signin />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
