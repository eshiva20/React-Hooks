import React from "react";
import { useState } from "react";
import './useStateHook.css'
import { Link } from 'react-router-dom';

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
      <Link style={{marginTop:'3rem'}} to="/">Exit to Main</Link>
    </div>
  );
};

export default useStateHook;
