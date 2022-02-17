import { useSelector } from "react-redux";
import Item from "./Item";

export default function List({ todos, onEdit, ...rest }) {
  const todoData = useSelector(state => state.todo.todos)

  console.log(todoData)
  
  return (
    <ul className="todo-list">
      {todoData.map((data) => (
        <Item
          key={data.id}
          data={data}
          onEdit={onEdit}
          {...rest}
        />
      ))}
    </ul>
  )
}