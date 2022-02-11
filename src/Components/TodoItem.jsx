import React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import Input from './Input';
import { editTodo, deleteTodo, completeTodo } from "./stores/store";



export default class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <Input
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    return (
      <li
        className={classNames({
          completed: todo.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}

