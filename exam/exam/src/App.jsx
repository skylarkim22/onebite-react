import { useState } from "react";
import "./App.css";
import InputText from "./components/Input";
function App() {
  const [value, setValue] = useState("");
  const handlerChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <InputText
        id="input1"
        disabled={true}
        defaultValue={"기본 값"}
        label={"uncontrolled"}
      />

      <InputText
        id="input2"
        label={"controlled"}
        value={value}
        onChange={handlerChange}
      />
    </>
  );
}

export default App;
