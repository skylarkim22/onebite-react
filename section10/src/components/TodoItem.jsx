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
// memo 메서드는 얕은 비교를 하기때문에 onDelete, updateDone이 리렌더링될때마다 해당 함수가 새로 생성되기때문에 변경됐다고 판단함
// 두번재 인자에 콜백함수를 체크하는 로직을 넣을수가 있다.
export default memo(TodoItem, (preProps, nextProps) => {
  // true -> props 바꾸지 않은, false -> props 바뀜
  if (preProps.todo !== nextProps.todo) return false;
  return true;
});
