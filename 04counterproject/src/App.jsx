import { useState } from 'react'// Hooks ko import kiya 
import './App.css'

function App() {


  //Hooks in React are functions that allow you to use React features like state and lifecycle methods in functional components. They were introduced in React 16.8 and have since become an essential part of React development, simplifying code and enabling reusable logic without the need for class components.


  let [counter/*Variable*/,setcounter/*Function*/]=useState(0) 
  function addvalue(){
  if (counter>=0 && counter<20) {
    setcounter(counter+1);
  } 
  }
  function subvalue(){
    if(counter>0){
      setcounter(counter-1); 
    }
  } 
  return (
    <>
    <h1>Counter :{counter}</h1>
    <button onClick={addvalue} id='increase'>Increase Value</button>
    <br />
    <br />
    <button onClick={subvalue} id='decrease'>decrease Value</button>
    </>
  )
}

export default App
