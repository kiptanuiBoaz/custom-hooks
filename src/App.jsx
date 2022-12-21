import React,{useState} from "react";
import { useLocalStorage } from "./UseLocalStorage";


function App() {

  const [name,setName] =  useLocalStorage( "name", "");
  
  return (
    <div>
      <p>something</p>
     <input type="text" value={name}  onChange={e=>setName(e.target.value)} />
    </div>
  );
}

export default App;
