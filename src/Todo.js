import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
      toggleTodo(todo.id)
  }

  return (
    <div className="todoItem">
      <label>
        <input  type="checkbox" className="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
        {todo.name}
      </label>
    </div>
  );
};

export default Todo;
