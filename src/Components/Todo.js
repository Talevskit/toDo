import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const Todo = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <div className="todo">
      <ul>
        <li>
          {todo.task}
          <a href="#!" className="secondary-content">
            <i onClick={handleDelete} className="material-icons black-text">
              delete
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Todo;
