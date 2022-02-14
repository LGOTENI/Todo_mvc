import React, { useState } from "react";
import Input from './components/Input'
import Items from './components/Items'
import { NavLink } from "react-router-dom";


function App() {
  
  const [todoData, setTodoData] = useState([]);

  const itemsNumber= todoData.length
// Enregistrement des données
  const handleSave = (Data) => {
      setTodoData((oldState) => {
        return [...oldState, Data];
      });
  }; 
  //   Recuperation des données envoyées

  return (
    <div className="todoapp">
      {/* Ddebut header Todo */}
      <header className="header">
        <h1>My todo</h1>
        <Input onSave={handleSave} />
      </header>

      {/* Debut Section main */}

      <section className="main">
        <input type="checkbox" className="toggle-all" checked={true} />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {todoData.map((data) => (
            <Items
              key={data.id}
              data={data}
              setTodoData={setTodoData}
              todoData={todoData}
            />
          ))}
        </ul>
      </section>

      {/* Debut Footer */}
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsNumber}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <NavLink to="/all" className="selected">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/active" className="selected">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" className="selected">
              Completed
            </NavLink>
          </li>
        </ul>
      </footer>

      {/* Fin Footer */}
    </div>
  );
}
export default App;
