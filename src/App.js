import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Time from "./components/Time/Time";

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState('');

  const run = () => {
    setStart(setInterval(() => {
      setTime(time => time + 1);
    }, 1));
  };

  useEffect(() => {
    return() => {
      if(start){
        clearInterval(start);
      }
    };
  }, []);

  const stop = () => {
    clearInterval(start);
  };

  const reset = () => {
    setTime(0);
  };

  return(
    <Container>
      <Time time={time} />
      <Button action={run}>start</Button>
      <Button action={stop}>stop</Button>
      <Button action={reset}>reset</Button>
    </Container>
  );
};

export default App;
