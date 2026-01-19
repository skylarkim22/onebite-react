import { useState, useRef, memo, useContext } from "react";
import { TodoStateContext } from "../App";
import "./Editor.css";

const Editor = () => {
  const { onCreate } = useContext(TodoStateContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const setChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        placeholder="새로운 할일"
        value={content}
        onChange={setChangeContent}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default memo(Editor);
