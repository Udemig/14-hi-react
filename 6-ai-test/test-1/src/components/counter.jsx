import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // state'deki sayacın değerini 10 ile çarp ve bildirim gönder
  useEffect(() => {
    const result = count * 10;
    console.log(result);
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button disabled={count <= 0} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
