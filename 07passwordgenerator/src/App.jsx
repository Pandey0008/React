import { useState, useCallback, useEffect } from 'react';
import { useRef } from 'react';
import ReactDOM from "react-dom/client";

function App() {
  // State hooks to manage password settings and generated password
  const [length, setLength] = useState(8); // Length of the password
  const [allownumber, setallowNumber] = useState(false); // Whether numbers are allowed in the password
  const [allowcharacter, setallowCharacter] = useState(false); // Whether special characters are allowed
  const [password, setPassword] = useState(""); // The generated password

  // useRef hook to reference the password input element (to enable clipboard copy)
  const passwordRef = useRef(null);

  // useCallback hook for memoizing the password generator function
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Default characters for the password

    // Adding numbers if the 'allownumber' state is true
    if (allownumber) { str += '0123456789'; }
    
    // Adding special characters if the 'allowcharacter' state is true
    if (allowcharacter) { str += '~!@#$%^&*()[]{}-=;,./ '; }

    // Generating a random password based on the selected options
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char); // Append the random character to the password string
    }
    setPassword(pass); // Set the generated password to the state
  }, [length, allownumber, allowcharacter]);

  // useCallback hook for memoizing the function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password input field
    window.navigator.clipboard.writeText(password)
  }, [password]); // Recalculate when the password changes

  // useEffect hook to regenerate the password when length, number, or character settings change
  useEffect(() => {
    passwordGenerator(); // Call the password generation function
  }, [length, allownumber, allowcharacter, passwordGenerator]); // Dependencies: rerun when these values change

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-center text-black bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        
        {/* Password input and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} // Reference to the input for clipboard copying
          />
          <button 
            onClick={copyPasswordToClipboard} 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'
          >
            Copy
          </button>
        </div>

        {/* Controls for password length and allowed characters */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={1}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} // Update password length
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox to allow numbers in the password */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={allownumber}
              id='numberInput'
              onChange={() => setallowNumber((prev) => !prev)} // Toggle number inclusion
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Checkbox to allow special characters in the password */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={allowcharacter}
              id='characterInput'
              onChange={() => setallowCharacter((prev) => !prev)} // Toggle character inclusion
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
