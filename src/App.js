import React from "react";
import { AppContextProvider } from "./context/AppContext";
import "./App.css";

const App = () =>(
  <AppContextProvider>
    <h1>HELLO WORLD</h1>
  </AppContextProvider>
) 

export default App;
