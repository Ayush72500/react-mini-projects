import { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  
  const handleChildClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      
      <Child onClick={handleChildClick} />
    </div>
  );
}

export default App;