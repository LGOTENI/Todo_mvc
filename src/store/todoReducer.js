/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

let id = 0

const initialState = {
  todos: [],
  filter: [],
  allSelect: false
}
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, value) => {
      const data = {
        id: id++,
        todo: value.payload,
        checked: false,
      }
      state.todos.push(data)
      state.filter = [...state.todos]
    },
    edit: (state, payload) => {
      const index = state.filter.findIndex(
        (todo) => todo.id === payload.payload.data.id
      )
      state.filter[index].todo = payload.payload.value
      state.todos[index].todo = payload.payload.value
    },
    remove: (state, payload) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== payload.payload.id
      )
      state.filter = state.filter.filter(
        (todo) => todo.id !== payload.payload.id
      )
    },
    toogle: (state, payload) => {
      const index = state.filter.findIndex(
        (todo) => todo.id === payload.payload.id
      )
      const table = state.filter
      const table2 = state.todos

      table[index].checked = !payload.payload.checked
      table2[index].checked = !payload.payload.checked
    },
    deleteAll: (state) => {
    /*  const maSuperConstante = state.todos.length
      state.todos.splice(0, maSuperConstante) */
      state.filter = []
      state.todos = []
    },
    selectAll: (state, payload) => {
      payload.payload.map((item) => {
        const index = state.filter.findIndex(
          (todo) => todo.id === item.id
        )

        const table = state.filter
        const table2 = state.todos
        
        if (state.allSelect) { 
          table[index].checked = false
          table2[index].checked = false
        } else {
          table[index].checked = true
          table2[index].checked = true 
        }
      })
      state.allSelect = !state.allSelect
    },

    filterTodo: (state, payload) => {
      switch (payload.payload) {
        case "all":
          state.filter = [...state.todos]
          break
        case "done":
          state.filter = state.todos.filter((item) => item.checked === false)
          break
        case "completed":
          state.filter = state.todos.filter((item) => item.checked === true)
          break
        default:
          state.filter = [...state.todos]
          break
      }
    },
  },
})

export const {
  add: addTodo,
  edit,
  remove,
  toogle,
  deleteAll, 
  selectAll,
  filterTodo,
} = todoSlice.actions
export default todoSlice.reducer
