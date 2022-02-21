import Item from "./Item";

export default function List({ onData }) {
  return (
    <ul className="todo-list">
      {onData.map((data) => (
        <Item
          key={data.id}
          data={data}
        />
      ))}
    </ul>
  )
}
