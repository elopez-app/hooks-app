import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];

  const addTodoAction = {
    type: "[TODO] Add todo",
    payload: {
      id: 2,
      description: "Nuevo todo",
      done: false,
    },
  };

  const deleteTodoAction = {
    type: "[TODO] Remove todo",
    payload: 1,
  };

  const toggleTodoAction = {
    type: "[TODO] Toggle todo",
    payload: 1,
  };

  test("Deberia de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const newState = todoReducer(initialState, addTodoAction);

    expect(newState.length).toBe(2);
    expect(newState).toContain(addTodoAction.payload);
  });

  test("Deberia de remover un todo", () => {
    const newState = todoReducer(initialState, deleteTodoAction);

    expect(newState.length).toBe(0);
  });

  test("Deberia de hacer toggle de la propiedad done del todo en el estado inicial", () => {
    const newState = todoReducer(initialState, toggleTodoAction);

    expect(newState[0].done).toBeTruthy();
  });
});
