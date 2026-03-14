import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContex";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  return (
    <div className="h-10 w-full bg-red-800 p-2 flex justify-between">
      <h1 className="text-xl font-bold">This is Navbar</h1>
      <h2 className="font-bold">{theme}</h2>
      <button
        onClick={() => {
          if (theme == "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        className="px-4 bg-blue-400 text-white font-bold rounded "
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
