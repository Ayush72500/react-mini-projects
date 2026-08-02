import {useState} from "react";

function App(){
  return(
    <div>
      <h1>Todo App</h1>
    <form >
      <input type="text" placeholder="enter the tasks" />
      <button>Enter</button>
    </form>
    
    <ul>
      <li>Task1 <button>delete</button></li>
      
      
    </ul>
    </div>
    
  )
}

export default App;