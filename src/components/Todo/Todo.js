import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoView from "./TodoView";
import { TodoInput } from "./TodoInput";
import { TodoViewContext } from "../../context/context";

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

  return <div>{showAllTodos()}</div>;
};

export default Todo;
