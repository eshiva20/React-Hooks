import React from "react";
import { useState, useMemo } from "react";

const useMemoHook = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const countNum = (num) => {
    console.log("countNum function is called");
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };
  const handleCounter = () => {
    return setCount(count + 1);
  };

  const getValue = useMemo(() => {
    return countNum(count);
  }, [count]);

  // const getValue=countNum(count);

  return (
    <div className="main">
      <h1>useMemo Hook</h1>
      <button
        style={{ cursor: "pointer" }}
        onClick={handleCounter}
        className="effect-btn"
      >
        Increase{" "}
      </button>
      <h2 style={{ color: "black" }}>Num is {getValue}</h2>
      <button
        className="effect-btn"
        style={{ cursor: "pointer" }}
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "I am True" : "I am false"}
      </button>
    </div>
  );
};

export default useMemoHook;
