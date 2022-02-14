import React, { useState } from "react";

//  Id d'enregistrement
let id = 0;

const Input = ({onSave}) => {
  const [todo, setTodo] = useState("");
  const [stateTodo, setStateTodo] = useState(false);

  //   Recuperation des données envoyées
  const handleSubmit = (e) => {
    if (e.which === 13) {
      const Data = {
        id,
        todo,
        stateTodo
      };
      onSave(Data);
      id++;
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
