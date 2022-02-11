import React, { Component } from "react";
import propTypes from "prop-types";
import classNames from "classnames";

export default class Input extends Component {
  static propTypes = {
    onSave: propTypes.func.isRequired,
    text: propTypes.string,
    placeholder: propTypes.string,
    editing: propTypes.bool,
    newTodo: propTypes.bool,
  };

  state = {
    text: this.props.text || "",
  };

  handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };


  render() {
    return (
      <input
        className={classNames({
          edit: this.props.editing,
          "new-todo": this.props.newTodo,
        })}
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
