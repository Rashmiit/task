import React, { useState } from 'react'

function Background() {
    const[color, setColor]=useState("")
    const changeColor=(color)=>{
        setColor(color)
    }
  return (
    <div className='counter' >
        <h1>Change Background Color</h1>
        <button onClick={()=>changeColor('red')} style={{backgroundColor:color}}>color</button>
    </div>
  )
}
export default Background
