import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, deleteTodo }) => {
  return (
    <ul
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
export default ToDoList;
