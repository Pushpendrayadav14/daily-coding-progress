import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./features/auth/pages/LoginForm";
import Register from "./features/auth/pages/RegisterForm";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
