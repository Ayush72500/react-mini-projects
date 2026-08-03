import { useState } from "react";

function App(){

  const [display, setDisplay] = useState("")

  function handleClick(value){
    if (display==="Error"){
      setDisplay(value)
      return
    }
      setDisplay((prev)=>prev+value)
  }
  function calculate() {
    try{
      setDisplay(eval(display).toString())
    }catch{
      setDisplay("Error")
    }
    
  }


  return(
    <div>
      <h1>Calculator</h1>
      <input type="text" value={display}/>
      <div>
        <button onClick={()=>handleClick("7")}>7</button>
        <button onClick={()=>handleClick("8")}>8</button>
        <button onClick={()=>handleClick("9")}>9</button>
        <button onClick={()=>handleClick("/")}>/</button>
      </div>
      <div>
        <button onClick={()=>handleClick("4")}>4</button>
        <button onClick={()=>handleClick("5")}>5</button>
        <button onClick={()=>handleClick("6")}>6</button>
        <button onClick={()=>handleClick("*")}>x</button>
      </div>
      <div>
        <button onClick={()=>handleClick("1")}>1</button>
        <button onClick={()=>handleClick("2")}>2</button>
        <button onClick={()=>handleClick("3")}>3</button>
        <button onClick={()=>handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={()=>handleClick("0")}>0</button>
        <button onClick ={()=>setDisplay("")}>C</button>
        <button onClick ={()=>setDisplay(display.slice(0,display.length-1))}>⌫</button>
        <button onClick={()=>handleClick("+")}>+</button>
      </div>
      <button onClick={calculate}>=</button>
      
    </div>
    
  )
}

export default App;