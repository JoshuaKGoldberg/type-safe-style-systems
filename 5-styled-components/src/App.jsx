import { useState } from "react";
import styled from "styled-components";

const colors = {
  background: "#eeeeff",
  foreground: "purple",
};
const paddingMedium = "1rem";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  background: ${colors.background};
  color: ${colors.foreground};
  padding: ${paddingMedium};
`;

const Button = styled.button`
  border: 3px solid
    ${({ $pressed }) => ($pressed ? colors.foreground : colors.background)};
  cursor: pointer;
  padding: ${paddingMedium};
`;

function App() {
  const [pressed, setPressed] = useState(false);

  return (
    <Container>
      <H1>Hello, world!</H1>
      <Button
        $pressed={pressed}
        aria-pressed={pressed}
        onClick={() => setPressed(!pressed)}
        type="button"
      >
        Click me!
      </Button>
    </Container>
  );
}

export default App;
