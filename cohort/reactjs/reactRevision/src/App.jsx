import React from "react";
import { MainC } from "./component/MainC";
import { Student } from "./component/Student";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainC />
      <Student name="Pushpa" age={22} college="MIT" />
      <Footer />
    </div>
  );
};
export default App;
