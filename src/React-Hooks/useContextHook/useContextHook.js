import React, { createContext } from "react";
import CompA from "./CompA";
import { Link } from 'react-router-dom';

const About = createContext();

const useContextHook = () => {
  const name = "Shiva Epili";
  const jobProfile = "React Developer";

  return (
    <About.Provider value={{ name, jobProfile }}>
      <div className="main">
        <h1>useContext Hook</h1>
        <CompA />
        <Link style={{marginTop:'3rem'}} to="/">Exit to Main</Link>
      </div>
    </About.Provider>
  );
};

export default useContextHook;
export { About };
