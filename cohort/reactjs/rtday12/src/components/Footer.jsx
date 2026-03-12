import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] flex justify-between items-center gap-20 bg-pink-200 px-2 py-2 absolute bottom-0">
      <h2 className="text-3xl text-red-900 font-bold">footer</h2>
      <button
        className="px-2 py-2 bg-green-600 rounded "
        onClick={() => {
          navigate("/courses");
        }}
      >
        All courses
      </button>
    </div>
  );
};

export default Footer;
