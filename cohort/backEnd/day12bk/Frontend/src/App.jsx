import { useState } from "react";
import "./App.css";
import FaceExpression from "./features/FaceExpresion/Components/FaceExpress";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FaceExpression />
    </>
  );
}

export default App;
