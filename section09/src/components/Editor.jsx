import { useState, useRef, useContext } from "react";
import "./Editor.css";
import { useTodoStore } from "../store/useTodoStore";

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const createTodo = useTodoStore((state) => state.createTodo);
  const idRef = useRef(0);

  const setChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    createTodo({
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    });
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

export default Editor;
