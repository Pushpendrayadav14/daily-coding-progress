import React, { useState } from "react";
import styles from "./MainC.module.css";

export const MainC = () => {
  const [count, setCount] = useState(0);
  function increseCounter() {
    setCount(count + 1);
  }
  function resetCounte() {
    setCount(0);
  }
  function decreseCounter(){
    setCount(count - 1);
  }
  
  return (
    <div className={styles.dd}>
      <h1 id={styles.count}>{count}</h1>
      <button className={styles.btn} onClick={increseCounter}>
        count
      </button>
      <button className={styles.btn1} onClick={resetCounte}>
        Reseat
      </button>
            <button className={styles.btn2} onClick={decreseCounter}>
        Decrese
      </button>
    </div>
  );
};
