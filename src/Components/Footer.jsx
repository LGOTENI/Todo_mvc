/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from "react-redux"
import { deleteAll, filterTodo } from "../store/todoReducer"
import filters from "../utils/filters"

export default function Footer({ activeFilter, onFilter }) {
  const dispatch = useDispatch()
  const todosData = useSelector((state) => state.todo.filter)
  const leftCount = useSelector(
    ({ todo: { todos } }) => todos.filter((item) => !item.checked).length
  )

  const handleClick = (e, filter) => {
    e.preventDefault()
    onFilter(filter)
    dispatch(filterTodo(filter))
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount === 0 ? "No" : leftCount}</strong> item
        {leftCount === 1 ? "" : "s"} left
      </span>
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter.value}>
            <a
              href="#"
              onClick={(e) => handleClick(e, filter.value)}
              className={activeFilter === filter.value ? "selected" : ""}
            >
              {filter.label}
            </a>
          </li>
        ))}
      </ul>
      {leftCount === 0 && todosData.length > 0 && (
        <button
          type="button"
          className="clear-completed"
          onClick={() => dispatch(deleteAll())}
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}
