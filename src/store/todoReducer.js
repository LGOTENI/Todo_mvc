import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: ({ todos }, payload) => {
      todos.push(payload.payload)
    },
    edit: (state) => {

    },
    remove: (state, action) => {

    },
  },
})

export const { add: addTodo, edit, remove } = todoSlice.actions

export default todoSlice.reducer