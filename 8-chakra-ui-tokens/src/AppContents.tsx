import { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

export function AppContents() {
  const [pressed, setPressed] = useState(false);

  // In theory, the color="wat" should produce a TypeScript complaint.
  // In practice I couldn't find real docs for --strict-token-types...
  return (
    <Box
      color="wat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
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
