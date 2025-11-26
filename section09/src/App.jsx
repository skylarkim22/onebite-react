import "./App.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useTodoStore } from "./store/useTodoStore";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const todos = useTodoStore((state) => state.todos);
  const createTodo = useTodoStore((state) => state.createTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  // TodoContext의 todos가 변경되면 컴포넌트가 변경되는 것이기때문에 하위 컴포넌트도 변경됨
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
