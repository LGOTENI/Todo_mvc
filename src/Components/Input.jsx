import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoReducer"

//  Id d'enregistrement
let id = 0;


const Input = ({onSave}) => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch()

  // Recuperation des données envoyées
  const handleSubmit = (e) => {
    if (e.which === 13) {
      const data = {
        id: ++id,
        todo: todo,
        checked: false,
      }

      dispatch(addTodo(data))


      //onSave(data);
      setTodo('')
    }

  };

  return (
    <input
      type="text"
      className="new-todo"
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={handleSubmit}
      value={todo}
      placeholder="Que voulez-vous faire?"
    />
  );
};


export default Input;