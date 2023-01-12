import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Eduardo",
    email: "riv.edu10@gmail.com",
  };

  test("Deberia de regresar el objeto por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Juan" } });
    });

    expect(result.current.formState.name).toBe("Juan");
  });

  test("Debe de regresar el form al estado inicial", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: "Juan" } });
      onResetForm();
    });

    expect(result.current.formState).toEqual(initialForm);
  });
});
