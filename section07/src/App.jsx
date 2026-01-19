import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const handlerOnClick = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <Display count={count} />
      <Controller onClick={handlerOnClick} />
    </>
  );
}

export default App;
