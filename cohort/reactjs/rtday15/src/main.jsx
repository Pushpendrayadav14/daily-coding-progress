import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContex from "./context/ThemeContex.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContex>
    <App />
  </ThemeContex>,
);
