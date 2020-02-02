import React, { Component } from "react";
import Item from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <Item></Item>
        <Item></Item>
      </div>
    );
  }
}
