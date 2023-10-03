import cx from "classnames";
import { useState } from "react";

import styles from "./App.module.scss";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, world!</h1>
      <button
        aria-pressed={pressed}
        className={cx(styles.button, pressed && styles.pressed)}
        onClick={() => setPressed(!pressed)}
        type="button"
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
