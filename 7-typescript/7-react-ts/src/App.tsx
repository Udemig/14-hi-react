import { useState, useRef } from "react";
import Button4 from "./components/button";
import type { User } from "./type";

const App = () => {
  const [count, setCount] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Arttır</button>

      <input type="number" placeholder="sayı giriniz" ref={inputRef} />

      <Button4 text="Selam" />
    </div>
  );
};

export default App;
