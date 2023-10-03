import { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

export function AppContents() {
  const [pressed, setPressed] = useState(false);

  return (
    <Box flex alignItems="center" justifyContent="center" height="100%">
      <Heading as="h1" color="inherit" background="blue.50">
        Hello, world!
      </Heading>
      <Button
        aria-pressed={pressed}
        border="4px"
        borderColor={pressed ? "purple.900" : "blue.50"}
        cursor="pointer"
        onClick={() => setPressed(!pressed)}
      >
        Click me!
      </Button>
    </Box>
  );
}
