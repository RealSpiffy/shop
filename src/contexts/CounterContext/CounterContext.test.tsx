import React from "react";
import { renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CounterProvider, useCounter } from "./CounterContext";

test("should have initial values without provider", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.handleIncrement();
    result.current.handleIncrement();
  });

  expect(result.current.counter).toBe(-1);
});

test("should increment counter twice", () => {
  const wrapper = ({ children }) => (
    <CounterProvider>{children}</CounterProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => {
    result.current.handleIncrement();
    result.current.handleIncrement();
  });

  expect(result.current.counter).toBe(2);
});
