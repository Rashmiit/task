import React, { useState } from 'react'

function Item() {
    const[item,setItem]=useState()
    const[items,setItems]=useState([])

    const listState=()=>{
      if(item){
        setItems([...items,item])
        setItem("")       //CLEAR THE INPUT FIELD
      }

    }
    const handleInput=(e)=>{
      setItem(e.target.value)
    }
  return (
    <div>
      <input type='search' placeholder='Type something' value={item} onChange={handleInput}></input>
      <button onClick={listState}>submit</button>
      <ul>{items.map((item)=>(
      <li>{item}</li>
   ) )}
      </ul>
    </div>
  )
}

export default Item
