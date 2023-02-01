import React, { createContext } from "react";
import CompA from "./CompA";

const About = createContext();

const useContextHook = () => {
  const name = "Shiva Epili";
  const jobProfile = "React Developer";

  return (
    <About.Provider value={{ name, jobProfile }}>
      <div className="main">
        <h1>useContext Hook</h1>
        <CompA />
      </div>
    </About.Provider>
  );
};

export default useContextHook;
export { About };
