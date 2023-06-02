import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Click to increment</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
