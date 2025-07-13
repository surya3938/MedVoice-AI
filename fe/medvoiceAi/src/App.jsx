import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Med from "./Components/Med";
import Extra from "./Components/Extra";
import Tech from "./Components/Tech";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/medvoice" element={<Med />} />
        <Route path="/features" element={<Extra />} />
        <Route path="/techstack" element={<Tech />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
