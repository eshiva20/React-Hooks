import React from "react";
import { useState,useCallback } from "react";
import Todos from "./Child";
import { Link } from 'react-router-dom';

const useCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count+1);
  };

  // const addTodo = () => {
  //   setTodos((prev) => [...prev, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, "New Todo"]);
  }, [todos]);

  return (
    <div className="main">
      <h1>useCallback Hook</h1>
      <Todos todos={todos} addTodo={addTodo} />
      ______________________________________________
      <div>
        <button className="effect-btn" onClick={increment}>Count is {count}</button>
      </div>
      <Link style={{marginTop:'3rem'}} to="/">Exit to Main</Link>
    </div>
  );
};

export default useCallbackHook;