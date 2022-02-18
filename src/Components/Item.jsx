import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";
// import {} from "../store/todoReducer"
import { edit, remove, toogle } from "../store/todoReducer";



function View({ data, onEdit }) {

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toogle(data))
  }
  return (
    <li onDoubleClick={onEdit} className={`${data.checked ? "completed" : ""}`}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={data.checked}
          onChange={handleChange}
          autoFocus={true}
        />
        <label>{data.todo}</label>
        <button className="destroy" onClick={() => dispatch(remove(data))} />
      </div>
    </li>
  );
}

function Form({ data, closeEdit, onEdit }) {
  const [value, setValue] = useState(data.todo)
  const dispatch = useDispatch();


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
      // onEdit(data, value)
      dispatch(edit({data, value}));

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

const Item = ({data,onEdit }) => {

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
      <View data={data} onEdit={handleEdit} />
    )
  )
}

export default Item;
