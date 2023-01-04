import React, { createContext, useContext, useState } from "react";

const initialValue = {
  counter: -1,
  handleIncrement: () => {},
};

const CounterContext = createContext(initialValue);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((curr) => curr + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, handleIncrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
