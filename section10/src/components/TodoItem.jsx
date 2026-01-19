import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ todo, onDelete, updateDone }) => {
  const onClickButton = () => {
    onDelete(todo.id);
  };

  const onChangeIsDone = () => {
    updateDone(todo.id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" value={todo.isDone} onChange={onChangeIsDone} />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
