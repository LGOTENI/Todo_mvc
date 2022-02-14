import Item from "./Item";

export default function List({ todos, onEdit, ...rest }) {
  return (
    <ul className="todo-list">
      {todos.map((data) => (
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