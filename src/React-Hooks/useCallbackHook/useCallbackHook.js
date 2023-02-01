import React from "react";
import Child from "./Child";
import { useState } from "react";

const useCallbackHook = () => {

  const [count, setCount] = useState(0);
  const addValue=()=>{"add Value"}

//   useMemo(()=>{

//   },[count])

  return (
    <div className="main">
      <h1>useCallback Hook</h1>
      <Child addValue={addValue} />
      <button className="effect-btn" onClick={() => setCount(count + 1)}>
        Increment {count}
      </button>
    </div>
  );
};

export default useCallbackHook;
