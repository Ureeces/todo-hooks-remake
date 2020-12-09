import React, { useContext } from "react";
import { TodoViewContext } from "../../context/context";
import { Button } from "@material-ui/core";

import "./Todo.css";

const TodoView = () => {
  const {
    todoList: { id, todo, isCompleted },
    deleteTodoById,
    completeTodoById
  } = useContext(TodoViewContext);

  return (
    <div style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      {todo}
      <div>
          <Button color="primary" variant="outlined" onClick={() => completeTodoById(id)}>Complete</Button>
          <Button color="secondary" variant="outlined" onClick={() => deleteTodoById(id)}>Delete</Button>
      </div>
      <hr></hr>
    </div>
  );
};

export default TodoView;
