import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3 bg-pink-50">
      {/* Logo */}
      <div>
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://imgs.search.brave.com/Ftk2E1ASEBfr30l7WcrsWgU0yvM6zs1Y02RZchL5QLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vdmlzdGFwcmlu/dC9pbWFnZXMvd180/NjAsaF80NTksY19z/Y2FsZS9mX2F1dG8s/cV9hdXRvL3YxNzA2/MTkzNTE4L2lkZWFz/LWFuZC1hZHZpY2Ut/cHJvZC9ibG9nYWRt/aW4vYXR0YWNobWVu/dF85MTI3NjQ1Ni1l/MTUxNTU5Mzk4NDg2/Ny9hdHRhY2htZW50/XzkxMjc2NDU2LWUx/NTE1NTkzOTg0ODY3/LmpwZz9faT1BQQ"
          alt="logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-10 text-lg font-medium">
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "#FF69B4" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#FF69B4" : "black",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/product"
          style={({ isActive }) => ({
            color: isActive ? "#FF69B4" : "black",
          })}
        >
          Product
        </NavLink>
        <NavLink
          to="/courses"
          style={({ isActive }) => ({
            color: isActive ? "#FF69B4" : "black",
          })}
        >
          Courses
        </NavLink>
      </div>

      {/* Button */}
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Sign
      </button>
    </div>
  );
};

export default Navbar;
