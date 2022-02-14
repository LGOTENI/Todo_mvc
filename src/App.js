import React, { useCallback, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Input from './components/Input'
import List from "./components/List";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "./utils/filters"

function App() {

  const [todos, setTodos] = useState([])
  const [todosToDisplay, setTodoToDisplay] = useState([])
  const [activeFilter, setActiveFilter] = useState(FILTER_ACTIVE)

  const applyFilter = useCallback(() => {
    if (activeFilter === FILTER_ALL) {
      setTodoToDisplay([...todos])
    }
    if (activeFilter === FILTER_COMPLETED) {
      setTodoToDisplay(todos.filter(todo => todo.checked === true))
    }

    if (activeFilter === FILTER_ACTIVE) {
      setTodoToDisplay(todos.filter(todo => todo.checked === false))
    }
  }, [todos, activeFilter])

  useEffect(() => {
    applyFilter()
  }, [todos, activeFilter, applyFilter])

  // Enregistrement des données
  const handleSave = useCallback((data) => {
    setTodos((oldState) => {
      return [...oldState, data]
    });
  }, [])

  const handleToggleChecked = useCallback((todo) => {
    const newTodos = [...todos].map((item) => todo.id === item.id ? { ...item, checked: !todo.checked } : item)
    setTodos(newTodos)
  }, [todos])

  const handleDelete = useCallback((todo) => {
    setTodos((oldState) => oldState.filter(item => item.id !== todo.id))
  }, [])

  const handleFilter = useCallback((filter) => {
    setActiveFilter(filter)
  }, [])

  const handleDeleteAll = useCallback(() => {
    setTodos([])
  }, [])

  const handleEdit = useCallback((todoId, value) => {
    const newTodos = [...todos].map((item) => todoId === item.id ? { ...item, todo: value } : item)
    setTodos(newTodos)
  }, [todos])

  return (
    <div className="todoapp">
      {/* Ddebut header Todo */}
      <header className="header">
        <h1>My todo</h1>
        <Input onSave={handleSave} />
      </header>

      <section className="main">
        {todos.length > 0 && (
          <span>
            <input type="checkbox" id="toggle-all" className="toggle-all" />
            <label htmlFor="toggle-all"></label>
          </span>
        )}

        <List
          onEdit={handleEdit}
          todos={todosToDisplay}
          setTodoData={setTodos}
          onDelete={handleDelete}
          onToggle={handleToggleChecked}
        />
      </section>

      {todos.length > 0 && (
        <Footer
          todos={todos}
          onFilter={handleFilter}
          activeFilter={activeFilter}
          onDeleteAll={handleDeleteAll}
        />
      )}
    </div>
  );
}
export default App;
