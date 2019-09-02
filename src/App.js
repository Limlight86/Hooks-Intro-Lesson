import React from "react";
import { AppContextProvider } from "./context/AppContext";
import { TodoInput, TodoList, Counter } from "./components/index";
import "./App.css";

const App = () => (
  <AppContextProvider>
    <h1>Wyncode Intro to Hooks</h1>
    <Counter />
    <TodoInput />
    <TodoList />
  </AppContextProvider>
);

export default App;
