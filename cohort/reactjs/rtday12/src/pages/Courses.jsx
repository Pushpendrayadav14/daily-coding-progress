import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="bg-red-800 flex gap-20 flex-nowrap">
        <p className="shrink-0 text-1xl font-bold">Sale is Live!!!! </p>
        <p className="shrink-0 text-1xl font-bold">Sale is Live!!!! </p>
        <p className="shrink-0 text-1xl font-bold">Sale is Live!!!! </p>
        <p className="shrink-0 text-1xl font-bold">Sale is Live!!!! </p>
        <p className="shrink-0 text-1xl font-bold">Sale is Live!!!! </p>
        <p className="shrink-0 text-1xl font-bold">Sale is Live!!!! </p>
      </div>
      
      <Outlet/>
    </div>
  );
};

export default Courses;