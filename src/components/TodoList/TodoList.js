import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TodoList = () => {
  const { todoList } = useContext(AppContext);
  
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
