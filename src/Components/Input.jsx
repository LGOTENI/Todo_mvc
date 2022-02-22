import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../store/todoReducer"

function Input() {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    if (e.which === 13) {
      dispatch(addTodo(todo))
      setTodo("")
    }
  }

  return (
    <input
      type="text"
      className="new-todo"
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={handleSubmit}
      value={todo}
      placeholder="Que voulez-vous faire?"
    />
  )
}

export default Input
