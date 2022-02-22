import { useSelector } from "react-redux"
import Item from "./Item"

export default function List() {
  const todoData = useSelector((state) => state.todo.filter)
  return (
    <ul className="todo-list">
      {todoData.map((data) => (
        <Item
          key={data.id}
          data={data}
        />
      ))}
    </ul>
  )
}
