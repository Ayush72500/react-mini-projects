import { useState } from "react";

function App(){
  const [display, setdisplay] = useState("")

  const languages = [
  "React",
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "RAG"
];

  return (
      <div>
        <h1>Search Filter</h1>
      <input type="text" placeholder="search..." value={display} onChange={(e)=>setdisplay(e.target.value)}/>
      <ul>
        {
        languages.filter((language)=>{return language.toLowerCase().includes(display.toLowerCase())})
        .map((language)=>(
          <li>{language}</li>
        ))
      
        }
     </ul>
        
      </div>
  )
}

export default App;