import React, { useState } from "react";
import { AppContextProvider } from "./context/AppContext";
import { TodoInput, TodoList, Counter } from "./components/index";
import "./App.css";

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <AppContextProvider>
      <h1>Wyncode Intro to Hooks</h1>
      {showCounter ? <Counter /> : <h1>Counter has been Unmounted!</h1>}
      <button onClick={toggleCounter}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      <TodoInput />
      <TodoList />
    </AppContextProvider>
  );
};

export default App;
