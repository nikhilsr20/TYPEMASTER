import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Time from "./Time"
import Body from "./body"

const a="TYPEMASTER"

const Nav=()=>{
    const[display,setDisplay]=useState([]);
    const[I,setI]=useState(0);
useEffect(()=>{
    const interval = setInterval(() => {
        if (I < a.length) {
          setDisplay((prev) => prev + a[I]); 
          setI((prev) => prev + 1);
        } else {
            
           
          
            
          clearInterval(interval); 
        }
      }, 130);
      return () => clearInterval(interval); 
},[display,I])

return (
  <>
    <h1 id="Logo">
       {display}
       
    </h1>
      <Time/> 
      
      
    </>
)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nav/>);