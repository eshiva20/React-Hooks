import { useState, useEffect } from "react";

function Error() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
      console.log(count)
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <h1>Time left: {count} seconds</h1>
    </div>
  );
}

export default Error;
