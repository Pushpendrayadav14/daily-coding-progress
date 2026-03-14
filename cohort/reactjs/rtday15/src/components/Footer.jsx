import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContex";

const Footer = () => {
  const data = useContext(ThemeDataContext);
  return (
    <div className="absolute h-10 w-full bottom-0 bg-blue-300 p-2 flex justify-between">
      <h1 className="text-xl font-bold">This is Footer</h1>
      <h2 className="font-bold mr-10">{data}</h2>
    </div>
  );
};

export default Footer;
