import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotionImage } from "./util/get-emotion-image";

function App() {
  return (
    <>
      <Header
        title="제목"
        rightChild={<Button text="right" />}
        leftChild={<Button text="left" />}
      />
      <Button
        text="123"
        type="DEFAULT"
        onClick={() => {
          console.log("123 click");
        }}
      />
      <Button
        text="123"
        type="NEGATIVE"
        onClick={() => {
          console.log("123 click");
        }}
      />

      <Button
        text="123"
        type="POSITIVE"
        onClick={() => {
          console.log("123 click");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
