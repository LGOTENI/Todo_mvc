import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: ({ todos }, payload) => {
      todos.push(payload.payload);
    },
    edit: (state, payload) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === payload.payload.data.id
      );
      state.todos[index].todo = payload.payload.value;
    },
    remove: (state, payload) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== payload.payload.id
      );
    },
    toogle: (state, payload) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === payload.payload.id
      );
      state.todos[index].checked = !payload.payload.checked;
    },
    selectAll: (state, payload) => {
      // console.log(true)
    },
    selectActive: (state, payload) => {
      console.log('active', true)
      state.todos= state.todos.filter(
        (todoActive) => todoActive.checked=false
      )
    },
    deleteAll: (state, payloada) => {
      const maSuperConstante = state.todos.length;
      state.todos.splice(0, maSuperConstante);
    },
  },
});

export const {
  add: addTodo,
  edit,
  remove,
  toogle,
  selectAll,
  deleteAll, 
  selectActive
} = todoSlice.actions;
export default todoSlice.reducer;
