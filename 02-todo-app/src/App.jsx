import {useState} from "react";

function App(){
const [input, setinput] = useState("")
const [tasks, settasks] = useState([])

function addtask(e) {
  e.preventDefault();
  if(input.trim()==="") return;
  settasks([...tasks,input]);
  setinput("");
  
}
function deletee(index){
  settasks(
    tasks.filter((task,i) => {
    return i !== index;
  }))
}
  return(
    <div>
      <h1>Todo App</h1>
    <form >
      <input type="text" placeholder="enter the tasks" value={input} onChange={(e)=>setinput(e.target.value)}/>
      <button onClick={addtask}>add</button>
    </form>
    
    <ul>
      {
        tasks.map((task, index)=>(
          <div>
            <li>{task}
              <button onClick={()=>deletee(index)}>delete</button>
            </li>
          
          </div>
          
        ))
      }

      
      
      
    </ul>
    </div>
    
  )
}

export default App;