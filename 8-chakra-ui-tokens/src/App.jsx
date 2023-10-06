import { ChakraProvider } from "@chakra-ui/react";
import { AppContents } from "./AppContents";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContents />
    </ChakraProvider>
  );
}

export default App;
