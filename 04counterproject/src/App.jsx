import { useState } from 'react'; // Importing the useState hook from React to manage state
import './App.css'; // Importing CSS styles

function App() {
  // Initializing state using the useState hook.
  // 'counter' holds the current value, and 'setCounter' is the function to update it.
  let [counter, setCounter] = useState(0);

  // Function to increase the counter value, with a condition to stop at 20
  function addValue() {
    if (counter >= 0 && counter < 20) { // Only increment if counter is less than 20
      setCounter(counter + 1); // Update state to increase the counter
    }
  }

  // Function to decrease the counter value, with a condition to stop at 0
  function subValue() {
    if (counter > 0) { // Only decrement if counter is greater than 0
      setCounter(counter - 1); // Update state to decrease the counter
    }
  }

  return (
    <>
      {/* Displaying the current value of the counter */}
      <h1>Counter: {counter}</h1>

      {/* Button to increase the counter */}
      <button onClick={addValue} id="increase">
        Increase Value
      </button>
      <br />
      <br />

      {/* Button to decrease the counter */}
      <button onClick={subValue} id="decrease">
        Decrease Value
      </button>
    </>
  );
}

export default App; // Export the App component for use in other parts of the application
