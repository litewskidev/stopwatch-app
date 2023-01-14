import { useState } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Time from "./components/Time/Time";

const App = () => {

  const [time, setTime] = useState([

  ]);

  return (
    <Container>
      <Time />
      <Button>start</Button>
      <Button>stop</Button>
      <Button>reset</Button>
    </Container>
  );
};

export default App;
