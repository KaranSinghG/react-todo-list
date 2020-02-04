import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wakeup" },
      { id: 2, title: "breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("Handle Change");
  };
  handleSubmit = e => {
    console.log("Handle Submit");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">ToDo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
