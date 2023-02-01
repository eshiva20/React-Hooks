import React from "react";

const Child = ({ addValue }) => {
  console.log("Child Component Called",addValue);
//   console.log();
  return (
    <div>
      <h3 style={{ color: "black" }}>Child Component</h3>
    </div>
  );
};

export default Child;
