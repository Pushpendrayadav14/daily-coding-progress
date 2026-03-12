import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Courses from "./pages/Courses";
import Koder from "./pages/Koder";
import Kodex from "./pages/Kodex";
import Allcourses from "./pages/Allcourses";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<Allcourses />} />
          <Route path="/courses/koder" element={<Koder />} />
          <Route path="/courses/kodex" element={<Kodex />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
