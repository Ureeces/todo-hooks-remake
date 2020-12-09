import React, { useContext } from "react";
import { TodoViewContext } from "../../context/context";


const TodoView = () => {
    const {
        todoList: { id, todo, isCompleted }
    } = useContext(TodoViewContext);

  return(
      <div style={{ textDecoration: isCompleted ? "line-through" : "" }}>
          {todo}
      </div>
  ) 
};

export default TodoView;
