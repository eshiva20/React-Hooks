import React from "react";
import { useState } from "react";
import './useStateHook.css'

const useStateHook = () => {
  let [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("cannot be less then 0");
    }
  };

  return (
    <div className="main">
      <h1>useState Hook</h1>
      <div className="btns">
        <button className="state-btn" onClick={handleIncrease}>+</button>
        <span>{count}</span>
        <button className="state-btn" onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
};

export default useStateHook;
