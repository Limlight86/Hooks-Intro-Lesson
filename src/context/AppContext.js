import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <AppContext.Provider value={{ todoList, setTodoList, counter, setCounter}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
