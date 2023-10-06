import { useState } from "react";
import { Box } from "./Box";

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Box as="h1" background="wat" color="$foreground" padding="$medium">
        Hello, world!
      </Box>
      <Box
        aria-pressed={pressed}
        as="button"
        border="3px solid"
        borderColor={pressed ? "$background" : "$foreground"}
        cursor="pointer"
        onClick={() => setPressed(!pressed)}
        padding="$medium"
        type="button"
      >
        Click me!
      </Box>
    </Box>
  );
}

export default App;
