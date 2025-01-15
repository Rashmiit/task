import React, { useState } from 'react'

function Input() {
  const[input, setOutput]=useState("")
  const handleInputChange=(e)=>{setOutput(e.target.value)}
  return (
    <div className='counter'>
      <h1>Input:</h1>
      <input type='text' placeholder='Type something Here' onChange={handleInputChange} className='input'></input>
      <h2>Output:{input}</h2>
    </div>
  )
}

export default Input