import { memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child Rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
});

export default Child;