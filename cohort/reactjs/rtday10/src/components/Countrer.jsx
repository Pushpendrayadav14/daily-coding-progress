import React,{ useEffect,useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  useEffect(function(){
    console.log("hello");
  },[])

  return (
    <div>
      <h1 className="px-2 py-2 text-5xl font-bold">Input</h1>
      <input
        className="px-1 py-1 text-xl font-bold rounded h-10 w-80 border-solid"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="enter your name"
      />
      <h1 className="px-2 py-2 text-5xl font-bold">{counter}</h1>
      <button
        className="px-2 py-2 text-2xl bg-blue-500 font-bold"
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        Increse
      </button>
    </div>
  );
};

export default Counter;
