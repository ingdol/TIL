import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "react",
    },
    {
      id: 2,
      title: "redux",
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  // reducers: {
  //   addTodo: (state, action) => {
  //     return {
  //       ...state,
  //       todos: [...state.todos, action.payload],
  //     };
  //   },
  //   deleteTodo: (state, action) => {
  //     return {
  //       ...state,
  //       todos: state.todos.filter((todo) => todo.id !== action.payload.id),
  //     };
  //   },
  //   toggleTodo: (state, action) => {
  //     return {
  //       ...state,
  //       todos: state.todos.map((todo) =>
  //         todo.id === action.payload.id
  //           ? { ...todo, isDone: !todo.isDone }
  //           : todo
  //       ),
  //     };
  //   },
  // },
  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
