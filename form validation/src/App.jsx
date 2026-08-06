import { useState } from "react";

function App(){

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [error, seterror] = useState("")

function handleSubmit() {
  seterror("")
  if(name === ""){
    seterror("Name is required")
    return
  }
  if(email === ""){
    seterror("Email is required")
    return
  }
  if(password === ""){
    seterror("password is required")
    return
  }
  if(confirmPassword === ""){
    seterror("confirmPassword is required")
    return
  }
  if(password !== confirmPassword){
    seterror("Passwords do not match")
    return
  }
  seterror("Form submitted successfully")
}
  return(

    <div>
      <h1>Form Validation</h1>
      <h2>Name</h2>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
      <h2>Email</h2>
      <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
      <h2>Password</h2>
      <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
      <h2>Confirm password</h2>
      <input type="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <h3>{error}</h3>
      
      
    </div>
  )
}

export default App;