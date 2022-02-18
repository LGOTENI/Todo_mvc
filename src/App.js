import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Input from "./components/Input";
import List from "./components/List";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "./utils/filters";

function App() {
  const todoData = useSelector((state) => state.todo.todos);

  const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodoToDisplay] = useState([]);
  const [activeFilter, setActiveFilter] = useState(FILTER_ACTIVE);

  const applyFilter = useCallback(() => {
    if (activeFilter === FILTER_ALL) {
      setTodoToDisplay([...todos]);
    }
    if (activeFilter === FILTER_COMPLETED) {
      setTodoToDisplay(todos.filter((todo) => todo.checked === true));
    }

    if (activeFilter === FILTER_ACTIVE) {
      setTodoToDisplay(todos.filter((todo) => todo.checked === false));
    }
  }, [todos, activeFilter]);

  useEffect(() => {
    applyFilter();
  }, [todos, activeFilter, applyFilter]);

  const handleFilter = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  const handleDeleteAll = useCallback(() => {
    setTodos([]);
  }, []);

  return (
    <div className="todoapp">
      {/* Ddebut header Todo */}
      <header className="header">
        <h1>My todo</h1>
        <Input/>
      </header>
      <section className="main">
        {todoData.length > 0 && (
          <span>
            <input type="checkbox" id="toggle-all" className="toggle-all" />
            <label htmlFor="toggle-all"></label>
          </span>
        )}

        <List/>
      </section>

      {todoData.length > 0 && (
        <Footer
          onFilter={handleFilter}
          activeFilter={activeFilter}
          onDeleteAll={handleDeleteAll}
        />
      )}
    </div>
  );
}
export default App;
