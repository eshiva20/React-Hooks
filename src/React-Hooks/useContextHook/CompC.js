import React, { useContext } from "react";
import { About } from "./useContextHook";

const CompC = () => {
  const { name, jobProfile } = useContext(About);

  return (
    <div>
      <h1 style={{ color: "black" }}> My Name is {name}</h1>
      <h1 style={{ color: "black" }}> I am a {jobProfile} </h1>
    </div>
  );
};

export default CompC;
