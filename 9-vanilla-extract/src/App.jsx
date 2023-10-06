import { useState } from "react";
import { container, h1, button } from "./App.css";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={container}>
      <h1 className={h1}>Hello, world!</h1>
      <button
        className={button[pressed]}
        aria-pressed={pressed}
        onClick={() => setPressed(!pressed)}
        type="button"
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
