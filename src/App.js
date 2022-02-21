import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Input from "./components/Input";
import List from "./components/List";
import { selectAll } from "./store/todoReducer";

import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "./utils/filters";

function App() {
  const dispatch = useDispatch();
  // const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodoToDisplay] = useState([]);
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL);

  const todoData = useSelector((state) => state.todo.todos);

  const applyFilter = useCallback(() => {
    if (activeFilter === FILTER_ALL) {
      setTodoToDisplay([...todoData]);
    }
    if (activeFilter === FILTER_COMPLETED) {
      setTodoToDisplay(todoData.filter((todo) => todo.checked === true));
    }

    if (activeFilter === FILTER_ACTIVE) {
      setTodoToDisplay(todoData.filter((todo) => todo.checked === false));
    }
  }, [todoData, activeFilter]);

  useEffect(() => {
    applyFilter();
  }, [activeFilter, applyFilter]);

  const handleFilter = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <div className="todoapp">
      {/* Ddebut header Todo */}
      <header className="header">
        <h1>My todo</h1>
        <Input />
      </header>
      <section className="main">
        {todoData.length > 0 && (
          <span>
            <input
              type="checkbox"
              id="toggle-all"
              className="toggle-all"
              onChange={() => dispatch(selectAll())}
            />
            <label htmlFor="toggle-all"></label>
          </span>
        )}

        <List onData={todosToDisplay} />
      </section>

      {todoData.length > 0 && (
        <Footer
          onFilter={handleFilter}
          activeFilter={activeFilter}
        // onDeleteAll={handleDeleteAll}
        />
      )}
    </div>
  );
}
export default App;
