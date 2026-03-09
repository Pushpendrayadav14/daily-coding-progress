import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-3 bg-red-900  ">
      <h1 className="text-5xl"> Pryme </h1>
      <input
        className="border-2 px-15 rounded"
        type="text"
        placeholder="Search anything"
      />
      <div className="flex gap-10">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
