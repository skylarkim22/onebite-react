import "./App.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { initialState, reducer } from "./todosReducer";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

  const memoizeddipatch = useMemo(() => {
    return { onCreate, updateDone, onDelete };
  }, []);

  // TodoContext의 todos가 변경되면 컴포넌트가 변경되는 것이기때문에 하위 컴포넌트도 변경됨
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizeddipatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
