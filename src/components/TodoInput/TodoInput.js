import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import uuidv4 from "uuid/v4";

const TodoInput = () => {
  const { addTodo } = useContext(AppContext);
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { text, id: uuidv4() };
    addTodo(newTodo);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add to List</button>
    </form>
  );
};

export default TodoInput;
