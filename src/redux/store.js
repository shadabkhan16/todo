import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    theme: themeSlice,
  },
});

export default store;
