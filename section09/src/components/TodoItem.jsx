import "./TodoItem.css";
import { memo, useContext } from "react";
import { useTodoStore } from "../store/useTodoStore";

const TodoItem = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const onClickButton = () => {
    deleteTodo(todo.id);
  };

  const onChangeIsDone = () => {
    updateTodo(todo.id);
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

// 컴포넌트를 받아서 추가로 컴포넌트를 반환하는 함수를 HOC 고차함수
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // true : props 바뀌지 않음 -> 리렌더링 하지 않음
//   // false : prosp 바뀜 -> 리런더링 함
//   if (prevProps.todo === nextProps.todo) return true;
//   return false;
// });
// onDelete, updateDone 새로 생성되지 않도록 useCallback 사용했기때문에 memo만 해도 됨
export default memo(TodoItem);
