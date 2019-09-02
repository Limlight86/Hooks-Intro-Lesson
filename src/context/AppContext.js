import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTodo = todo => {
    setTodoList([...todoList, todo]);
  };

  return (
    <AppContext.Provider value={{ todoList, setTodoList, counter, setCounter, addTodo}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
