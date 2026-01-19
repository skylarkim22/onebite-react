import { useState, useMemo, useContext } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoStateContext, TodoDispatchContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const { totalCount, doneCount, remainCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const remainCount = totalCount - doneCount;
    return { totalCount, doneCount, remainCount };
  }, [todos]);

  const filteredTodos = getFilterTodos();

  return (
    <div className="List">
      <h4>Todo List 📋</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>remain : {remainCount} </div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
