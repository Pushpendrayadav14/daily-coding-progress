import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-blue-200 flex flex-col items-center">
      <h1 className="fext-2xl font-bold">This is home</h1>
      <button
        onClick={() => {
          navigate("/product");
        }}
        className=" ml-5 px-2 bg-blue-400 rounded font-bold text-white  "
      >
        Nevigate to product 
      </button>
    </div>
  );
};

export default Home;
