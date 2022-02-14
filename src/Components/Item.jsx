import { useCallback, useState } from "react"

function View({ data, onToggle, onDelete, onEdit }) {

  const handleDelete = (todo) => {
    onDelete(todo)
  }

  const handleChange = () => {
    onToggle(data)
  }

  return (
    <li
      onDoubleClick={onEdit}
      className={`${data.checked ? "completed" : ""}`}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={data.checked}
          onChange={handleChange}
          autoFocus={true}
        />
        <label>{data.todo}</label>
        <button className="destroy" onClick={() => handleDelete(data)} />
      </div>
    </li>
  )
}

function Form({ data, closeEdit, onEdit }) {
  const [value, setValue] = useState(data.todo)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleBlur = () => {
    closeEdit()
    onEdit(data.id, value)
  }

  const handleSubmit = (e) => {
    if (e.which === 13) {
      closeEdit()
      onEdit(data.id, value)
    }
  }

  return (
    <li className="editing">
      <input
        type="text"
        className="edit"
        autoFocus
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleSubmit} />
    </li>
  )
}

const Item = ({ data, onToggle, onDelete, onEdit }) => {

  const [editing, setEditing] = useState(false)

  const handleEdit = useCallback(() => {
    setEditing(true)
  }, [])

  const handleCloseEdit = useCallback(() => {
    setEditing(false)
  }, [])

  return (
    editing ? (<Form
      data={data}
      closeEdit={handleCloseEdit}
      onEdit={onEdit}
    />) : (
      <View data={data} onToggle={onToggle} onDelete={onDelete} onEdit={handleEdit} />
    )
  )
}

export default Item;
