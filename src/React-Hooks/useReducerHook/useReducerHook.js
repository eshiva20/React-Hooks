import React from "react";
import { useReducer } from "react";
import { Link } from 'react-router-dom';

const initialState = 50;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 50;
    case "decrement":
      return state - 50;
    default:
      return state;
  }
};
const useReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main">
      <h1>useReducer Hook</h1>
      <h3 style={{ color: "gray" }}>Count is {count}</h3>
      <button onClick={() => dispatch("increment")} className="effect-btn">
        Increase by 50
      </button>
      <button onClick={() => dispatch("decrement")} className="effect-btn">
        Decrease by 50
      </button>
      <Link style={{marginTop:'3rem'}} to="/">Exit to Main</Link>
    </div>
  );
};

export default useReducerHook;
