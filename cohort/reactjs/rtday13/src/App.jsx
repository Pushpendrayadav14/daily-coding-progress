import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AllSection from "./components/AllSection";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <div>
      <h1 className="text-4xl decoration-red-400 font-bold p-4 ">
        Theme is {theme}
      </h1>
      <Navbar theme={theme} changeTheme={changeTheme} />
      {/* <AllSection/>
      <Footer /> */}
    </div>
  );
};

export default App;
