import { useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);

  const handlerOnClick = (value) => {
    setCount(count + value);
  };

  // mounted
  useEffect(() => {
    console.log("mounted");
  }, []);

  // update
  useEffect(() => {
    console.log("update");
  }, [count]);

  return (
    <>
      <Display count={count} />
      {count % 2 === 0 ? <Even /> : null}
      <Controller onClick={handlerOnClick} />
    </>
  );
}

export default App;
