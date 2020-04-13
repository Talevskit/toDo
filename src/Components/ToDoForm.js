import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const onChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });

      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div className="app">
      <form>
        <input
          style={{ border: "solid black" }}
          placeholder=" Add toDo.."
          name="task"
          type="text"
          value={todo.task}
          onChange={onChange}
        ></input>
        <button className="btn" onClick={onSubmit}>
          Add ToDo
        </button>
      </form>
    </div>
  );
};
export default ToDoForm;
