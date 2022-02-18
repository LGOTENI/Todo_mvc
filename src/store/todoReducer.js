import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: ({todos}, payload) => {
      todos.push(payload.payload)
    },
    edit: (state, payload) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === payload.payload.data.id
      );
      state.todos[index].todo = payload.payload.value;
    },
    remove: (state, payload) => {
      state.todos= state.todos.filter((todo) => todo.id !== payload.payload.id ) 
    },
    toogle: (state, payload) => {
      const index= state.todos.findIndex((todo) => todo.id === payload.payload.id)
      state.todos[index].checked = !payload.payload.checked;
    },
    deleteAll: (state, payload) =>{
      
    }
  },
})

export const { add: addTodo, edit, remove, toogle } = todoSlice.actions

export default todoSlice.reducer