import { useState } from "react";

function App(){

   const [count, setCount] = useState(0)

function increment() {
  setCount((value)=>value+1);
}
function decrement() {
  setCount((value)=>value-1);
}
function reset() {
  setCount(0);
}
return(
  <div className="flex flex-col items-center justify-center ">
  <h1 className="text-6xl font-bold">Counter App</h1>
  <h2 className="text-5xl my-6">{count}</h2>
  <div className="flex gap-8 ">
  <button className="bg-sky-300 text-white px-6 py-2 rounded-lg" onClick={increment}>+</button>
  <button className="bg-sky-300 text-white px-6 py-2 rounded-lg" onClick={decrement}>-</button>
  <button className="bg-sky-300 text-white px-6 py-2  rounded-lg" onClick={reset}>reset</button>
  
  </div>
  </div>
  
  
)
}

export default App;