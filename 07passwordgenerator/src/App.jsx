import { useState,useCallback,useEffect}from 'react'
import { useRef } from 'react'
import ReactDOM from "react-dom/client"
function App() {
  const[length,setLength]=useState(8)
  const[allownumber,setallowNumber]=useState(false)
  const[allowcharacter,setallowCharacter]=useState(false)
  const[password,setPassword]=useState("")

//use ref hook=>The useRef hook in React is used to create a mutable reference object that persists across renders. It provides a way to access and manipulate DOM elements directly or store mutable data without causing a re-render.
 
const passwordRef=useRef(null)



  //useCallback hook=>The useCallback hook is a React hook that memoizes a callback function, ensuring that it retains the same reference across renders unless its dependencies change. This is particularly useful when you need to pass a stable function reference to child components, avoiding unnecessary re-renders or re-computations.

/*const memoizedCallback = useCallback(() =>{Your callback logic here},[dependencies]);*/


const passwordGenerator=useCallback(function(){
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(allownumber){str +='0123456789'}
  if(allowcharacter){str +='~!@#$%^&*()[]{}-=;,./ '}

  for (let i = 1; i <=length; i++) {
   let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setPassword(pass)

},[length,allownumber,allowcharacter])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
   window.navigator.clipboard.writeText(password).then(() => {
    alert('Text copied to clipboard!');
  });
},[password])

//use effect hook=>The useEffect hook in React is used to perform side effects in functional components. Common use cases include data fetching, subscribing to events, manipulating the DOM, and updating local state based on changes in props or state.

/*useEffect(()=>{Side effect logic},[dependencies]);*/

useEffect(()=>{
  passwordGenerator()
  },[length,allownumber,allowcharacter,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-center text-black bg-gray-800 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
       />
       <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={1}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={function(e){
            setLength(e.target.value)
          }}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={allownumber}
          id='numberInput'
          onChange={()=>{
            setallowNumber((prev)=>!prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={allowcharacter}
          id='characterInput'
          onChange={()=>{
            setallowCharacter((prev)=>!prev);
          }} />
          <label htmlFor="characterInput">Characters</label>
          </div>
      </div>
      </div>
    </>
  )
  }

export default App
