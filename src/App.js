import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "./components/Footer"
import Input from "./components/Input"
import List from "./components/List"
import { selectAll } from "./store/todoReducer"

import { FILTER_ALL } from "./utils/filters"

function App() {
  const dispatch = useDispatch()
  const [activeFilter, setActiveFilter] = useState(FILTER_ALL)

  const todoData = useSelector((state) => state.todo.filter)

  const handleFilter = useCallback((filter) => {
    setActiveFilter(filter)
  }, [])

  return (
    <div className="todoapp">
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
              onChange={() => dispatch(selectAll(todoData))}
            />
            <label htmlFor="toggle-all">H</label>
          </span>
        )}
        <List />
      </section>

      {todoData.length > 0 && (
        <Footer
          activeFilter={activeFilter}
          onFilter={handleFilter}
        />
      )}
    </div>
  )
}
export default App
