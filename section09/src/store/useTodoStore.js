import { create } from "zustand";

// export const initialState = [];

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE":
//       return [action.data, ...state];
//     case "UPDATE":
//       return state.map((todo) =>
//         todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     case "DELETE":
//       return state.filter((todo) => todo.id !== action.targetId);
//     default:
//       return state;
//   }
// };

export const useTodoStore = create((set) => ({
  todos: [],
  createTodo: (data) =>
    set((state) => ({
      todos: [...state.todos, data],
    })),
  updateTodo: (targetId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      ),
    })),
  deleteTodo: (targetId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== targetId),
    })),
}));
