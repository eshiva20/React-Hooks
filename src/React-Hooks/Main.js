import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main links">
      <Link className="link" to="/useStateHook">
        useState Hook
      </Link>
      <Link className="link" to="/useEffectHook">
        useEffect Hook
      </Link>
      <Link className="link" to="/useContextHook">
        useContext Hook
      </Link>
      <Link className="link" to="/useMemoHook">
        useMemo Hook
      </Link>
      <Link className="link" to="/useCallbackHook">
        useCallback Hook
      </Link>
      <Link className="link" to="/useRefHook">
        useRef Hook
      </Link>
      <Link className="link" to="/useReducerHook">
        useReducer Hook
      </Link>
    </div>
  );
};

export default Main;
