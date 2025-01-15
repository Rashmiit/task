import React, { useState } from 'react'
import Background from './Background'

function Toggle() {
    const[color,setColor]=useState("") 
    const toggle=()=>{
        setColor(!color)
    }
     return (
    <div >
        <button onClick={toggle}>{color ? "Hide Message" : "Show Message"}</button>
        
        {color && <h1>Hello, World!</h1>}



    </div>
  )
}

export default Toggle
