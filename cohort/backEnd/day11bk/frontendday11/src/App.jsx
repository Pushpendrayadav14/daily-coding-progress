import React from "react";
import { RouterProvider } from "react-router";
import Approutes from "./Approutes";
import "./style.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Approutes />
    </AuthProvider>
  );
};

export default App;
