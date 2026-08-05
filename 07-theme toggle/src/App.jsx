import { useState } from "react";

function App(){
const [isdark, setisdark] = useState(false)


  return(
      <div className={
    isdark
      ? " min-h-screen bg-black text-white"
      : "min-h-screen bg-white text-black"
  }>
        <h1>Theme Toggle</h1>
        <h2>Current Theme : {isdark?"Dark":"Light"} </h2>
      <button className="border px-4 py-2 rounded" onClick={()=>setisdark(false)}>Light</button>
      <button className="border px-4 py-2 rounded" onClick={()=>setisdark(true)}>Dark</button>
      </div>
  )
}


export default App;