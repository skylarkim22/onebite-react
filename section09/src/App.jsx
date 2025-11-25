import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onDelete = (id) => {
    const resultTodos = todos.filter((todo) => todo.id !== id);
    setTodos(resultTodos);
  };

  const updateDone = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(updateTodos);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} updateDone={updateDone} />
    </div>
  );
}

export default App;
