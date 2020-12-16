/**
 *
 * create by ligx
 *
 * @flow
 */
import React, { Component } from "react";
import InputTask from "./components/InputTask";
import List from "./components/List";
import { bindTo, connect } from "@lugia/lugiax";
import todo from "./models/todo";

const TodoList = connect(
  todo,
  (state) => {
    return { data: state.get("tasks") };
  },
  (mutations) => {
    return { delItem: mutations.delTask };
  }
)(List);

const fieldPath = ["formData", "task"];
const fieldName = fieldPath.join(".");

const TodoInput = bindTo(
  todo,
  {
    [fieldName]: "value",
  },
  {
    onChange: {
      [fieldName](v) {
        return v;
      },
    },
  },
  {
    eventHandle: {
      onEnter() {
        todo.mutations.addTask();
      },
    },
  }
)(InputTask);

export default () => (
  <div>
    <h1> To Do List </h1>
    <TodoInput />
    <TodoList />
  </div>
);
