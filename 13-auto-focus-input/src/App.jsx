import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Auto Focus App</h1>

      <h2>Name</h2>

      <input
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
      />

      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

export default App;