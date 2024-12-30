import { useState } from "react";

function App() {
  // State hook to manage the background color
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-0" style={{ backgroundColor: color }}>
      {/* Fixed bottom button container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* Color buttons container */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          {/* Button for Red color */}
          <button
            onClick={() => setColor('red')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>

        {/* Button for Grey color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('grey')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
        </div>

        {/* Button for Green color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('green')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
        </div>

        {/* Button for Blue color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('blue')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
        </div>

        {/* Button for Purple color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('purple')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
        </div>

        {/* Button for Pink color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('pink')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'pink' }}
          >
            Pink
          </button>
        </div>

        {/* Button for Violet color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('violet')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'violet' }}
          >
            Violet
          </button>
        </div>

        {/* Button for Indigo color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('indigo')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'indigo' }}
          >
            Indigo
          </button>
        </div>

        {/* Button for Black color */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor('black')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'black' }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
