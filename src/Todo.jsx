import React, { useState } from 'react'

function Todo() {
    const[item,setItem]=useState("")
    const[items,setItems]=useState([])
    
    const addItem=()=>{
        if(item){
            setItems([...items,item])
            setItem("")     //CLEAR INPUT FIELD

        }
    
    }
    const handleInput=(e)=>{
        setItem(e.target.value)
    }
    const deleteItem=(indexToDelete)=>{
            setItems(items.filter((_,index)=>index!==indexToDelete))
        
    }

  return (
    <div>
        <h1>Todo App</h1>
        <input type='text' placeholder='Type something here' value={item} onChange={handleInput}></input>
        <button onClick={addItem}>Add</button>
    <ul> {items.map((item,index)=>(  
    <li key={index}>{item}
            <button onClick={()=>deleteItem(index)}>Delete</button>
            </li>
))}
</ul>

    </div>
  )
}

export default Todo
