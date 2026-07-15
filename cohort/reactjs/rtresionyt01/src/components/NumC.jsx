import React, { useState } from "react";
import { useEffect } from "react";

export const NumC = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log("use effect is running......");
  }, [num]);

  return (
    <div className="bg-blue-50 h-[50%] w-[50%] flex justify-center flex-col p-3 gap-3">
      <h1 className="text-4xl font-extrabold">value of num: {num}</h1>
      <h1 className="text-4xl font-extrabold">value of num2: {num2}</h1>
      <button
        className="bg-blue-300 text-2xl font-extrabold px-5 py-9 rounded-2xl h-30 w-50"
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        click
      </button>
    </div>
  );
};
