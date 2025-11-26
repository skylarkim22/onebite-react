import "./App.css";
import { useRef, useReducer, useCallback } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { initialState, reducer } from "./todosReducer";

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  // 마운트 될때만 생성됨
  const updateDone = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} updateDone={updateDone} />
    </div>
  );
}

export default App;
