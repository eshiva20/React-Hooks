import React from "react";
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child class called");
  return (
    <div className="main">
      {todos.map((todo, index) => {
        return <span style={{fontSize:"20px"}} key={index}>{todo} {index}</span>;
      })}
      <button className="effect-btn" onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);