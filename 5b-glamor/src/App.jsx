import { useState } from "react";
import { css } from "glamor";

const colors = {
  background: "#eeeeff",
  foreground: "purple",
};
const paddingMedium = "1rem";

const container = css({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
});

const h1 = css({
  background: colors.background,
  color: colors.foreground,
  padding: paddingMedium,
});

const button = ({ pressed }) =>
  css({
    border: `3px solid ${pressed ? colors.foreground : colors.background}`,
    cursor: "pointer",
    padding: paddingMedium,
  });

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={container}>
      <h1 className={h1}>Hello, world!</h1>
      <button
        className={button({ pressed })}
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
