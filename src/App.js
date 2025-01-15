import React from 'react';
import './App.css';
import Counter from './Counter';
import Input from './Input';
import Background from './Background';
import Toggle from './Toggle';
import Item from './Item';
import Todo from './Todo';
import Multistep from './Multistep';
import Quiz from './Quiz';
import Search from './Search'
import Dragdrop from './Dragdrop'
export default function App() {
  return (
    <div>
      <Counter />  
      <Input /> 
      <Background />   
      <Toggle />
      <Item />
      <Todo />
      <Multistep />
      <Quiz />
      <Search />
      <Dragdrop />
    </div>
  )
}
