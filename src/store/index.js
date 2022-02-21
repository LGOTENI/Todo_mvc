import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoReducer"

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})
