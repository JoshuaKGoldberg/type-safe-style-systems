import { useState } from "react";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="bg-blue-50 text-center font-bold p-4 text-purple-900">
        Hello, world!
      </h1>

      <button
        aria-pressed={pressed}
        className={`border-4 ${
          pressed ? "border-purple-900" : "border-blue-50"
        } cursor-pointer p-4`}
        onClick={() => setPressed(!pressed)}
        type="button"
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
