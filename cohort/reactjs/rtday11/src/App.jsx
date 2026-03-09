import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Random from "./pages/Random";
import Courses from "./pages/Courses";
import Cohort1 from "./pages/Cohort1";
import Deatialcourse from "./pages/Deatialcourse";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/courses" element={<Courses />} />
        {/* nested routes */}

        <Route path="/product/man" element={<Man />} />
        <Route path="/product/woman" element={<Woman />} />

        {/* dynamic routes */}
        <Route path="/about/:id" element={<Random />} />
        <Route path="/courses/:Courseid" element={<Cohort1 />} />

        {/* nested dynamic routes  */}

        <Route path="/courses/:Courseid/detial" element={<Deatialcourse />} />
        {/* 404 not found page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
