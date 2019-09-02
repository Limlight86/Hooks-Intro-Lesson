import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const Counter = () => {
  const { counter, setCounter } = useContext(AppContext);

  useEffect(() => {
    console.log("Counter Mounted!");
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
    return () => {
      console.log("Counter Unmounted!");
      clearInterval(interval);
      setCounter(0);
    };
  }, [setCounter]);

  return (
      <h1>Counter : {counter}</h1>
  );
};

export default Counter;
