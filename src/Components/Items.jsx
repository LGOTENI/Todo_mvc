import React, {useState} from 'react';

const Items = ({data, setTodoData, todoData}) => {

    const [changeClass, setChangeClass] = useState(false)
    const [change, setChange]= useState(false)

    const handleDelete= (todoId) => {
        const newTodo= todoData.filter(todo => todo.id !== todoId)
        setTodoData(newTodo)
    }
    
    return (
      <li
        onClick={() => setChange(!change)}
        className={`${
          change ? "completed" : ""
        }`}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={data.dataTodo}
            autoFocus={true}
          />
          <label>{data.todo}</label>
          <button className="destroy" onClick={() => handleDelete(data.id)} />
        </div>
      </li>
    );
}

export default Items;
