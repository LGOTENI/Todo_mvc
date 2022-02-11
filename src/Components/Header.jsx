import React from "react";
import Input from "./Input";
import { addTodo } from "./stores/store";

const Header = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <Input
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            addTodo(text);
          }
        }}
        placeholder="Que faut-il faire?"
      />
    </header>
  );
};

export default Header