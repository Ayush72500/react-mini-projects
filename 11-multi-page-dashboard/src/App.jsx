import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
import Home from "./dashboard-pages/Home";

import Profile from "./dashboard-pages/Profile";
import Settings from "./dashboard-pages/Settings";

function App(){
    return(
        
        <div>
            <h1>My Dashboard</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink
            to="/profile"
                className={({ isActive }) =>isActive ? "font-bold text-blue-500" : "text-black"}>Profile</NavLink>
            <NavLink to="/settings">Settings</NavLink>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
        
            
            
        
    )
}

export default App;