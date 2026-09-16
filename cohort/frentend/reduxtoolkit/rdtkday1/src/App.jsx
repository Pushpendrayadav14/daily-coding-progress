import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/features/counterSlice";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);
  return (
    <div className="Appcontainer">
      <h1>Redux Toolkit</h1>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        placeholder="Enter amount"
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      />

      <button
        onClick={() => {
          dispatch(incrementByAmount(num));
        }}
      >
        incrementByAmount
      </button>
    </div>
  );
};

export default App;
