import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContex";

const Section1 = () => {
  const data = useContext(ThemeDataContext);
  return (
    <div>
      <h1 className="text-xl font-bold">Section 2 </h1>
      <h2 className="font-bold">{data}</h2>
    </div>
  );
};

export default Section1;
