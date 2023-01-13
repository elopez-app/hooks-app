import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-example/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button");

    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText("BreakingBad Quotes")).toBeTruthy();
    expect(nextButton.disabled).toBeTruthy();
  });

  test("Debe de mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Eduardo", quote: "Test quote" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button");

    expect(screen.getByText("Eduardo")).toBeTruthy();
    expect(screen.getByText("Test quote")).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Eduardo", quote: "Test quote" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button");

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
