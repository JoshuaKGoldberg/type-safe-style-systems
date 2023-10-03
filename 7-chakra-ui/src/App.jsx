import { ChakraProvider } from "@chakra-ui/react";
import { AppContents } from "./AppContents";

function App() {
  return (
    <ChakraProvider>
      <AppContents />
    </ChakraProvider>
  );
}

export default App;
