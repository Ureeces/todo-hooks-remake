import React, { useState, useContext } from "react";
import { TodoInputContext } from "../../context/context";

import { FormControl } from "@material-ui/core";

const TodoInput = () => {
  const { addTodo } = useContext(TodoInputContext);

  const [value, setValue] = useState("");

  const createTodo = (event) => {
    event.preventDefault();

    addTodo(value);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}

        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
