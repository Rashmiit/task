import React, { useState } from "react";
 function Counter(){
    const[count, setCount]=useState(0)
    return(
    <div className="counter">
        <h1>Count: {count}</h1>
        <button className="btn btn-danger" onClick={()=>setCount(count+1)}>Increment</button>
        <button className="btn btn-primary" onClick={()=>setCount(count-1)}>Decrement</button>
        <button className="btn btn-primary" onClick={()=>setCount(0)}>Reset</button>

    </div>
    )
 }
 export default Counter