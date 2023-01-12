import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en useCounter", () => {
  const counterValue = 100;

  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Deberia de retornar el contador con 100", () => {
    const { result } = renderHook(() => useCounter(counterValue));
    const { counter } = result.current;

    expect(counter).toBe(counterValue);
  });

  test("Deberia de incrementar el counter", () => {
    const { result } = renderHook(() => useCounter(counterValue));
    const { increment } = result.current;

    act(() => increment());

    expect(result.current.counter).toBe(counterValue + 1);
  });

  test("Deberia de decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(counterValue));
    const { decrement } = result.current;

    act(() => decrement());

    expect(result.current.counter).toBe(counterValue - 1);
  });

  test("Deberia de resetear el counter", () => {
    const { result } = renderHook(() => useCounter(counterValue));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(counterValue);
  });
});
