import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      isDone: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        isDone: false,
      };
      state.todo.push(todo);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todo.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.todo.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title; // Update the title of the todo
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
