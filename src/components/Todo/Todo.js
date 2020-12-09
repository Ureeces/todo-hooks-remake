import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoView from "./TodoView";
import TodoInput from "./TodoInput";
import { TodoViewContext, TodoInputContext } from "../../context/context";

const Todo = () => {
  let initialTodoArray = [
    {
      id: uuidv4(),
      todo: "Create the app",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      todo: "Test the app",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      todo: "Publish the app",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodoArray);

  const showAllTodos = () => {
    return todos.map((todoList) => {
      return (
        <TodoViewContext.Provider value={{ todoList }} key={todoList.id}>
          <TodoView />
        </TodoViewContext.Provider>
      );
    });
  };

  const showInputTodo = () => {
    return (
      <TodoInputContext.Provider value={{ addTodo }}>
        <TodoInput />
      </TodoInputContext.Provider>
    );
  };

  const addTodo = (todo) => {
    let newTodo = {
      id: uuidv4(),
      todo: todo,
      isCompleted: false,
    };

    let newTodos = [...todos, newTodo];

    setTodos(newTodos);

    console.log("Added new todo:", todo);
  };

  return (
    <div>
      {showInputTodo()}
      {showAllTodos()}
    </div>
  );
};

export default Todo;
