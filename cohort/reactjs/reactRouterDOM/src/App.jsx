import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contect from "./pages/Contect";
import About from "./pages/About";
import MainSection from "./components/MainSection";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
