import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const li = screen.getByRole("listitem");
    expect(li.className).toBe("list-group-item d-flex justify-content-between");

    const span = screen.getByLabelText("description");
    expect(span.className).toContain("align-self-center");
    expect(span.className).not.toContain("text-decoration-line-through");
  });

  test("Debe de mostrar el todo completado", () => {
    todo.done = true;

    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const span = screen.getByLabelText("description");
    expect(span.className).toContain("text-decoration-line-through");
  });

  test("Debe de llamar el toggletodo cuando se haga click", () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const span = screen.getByLabelText("description");
    fireEvent.click(span);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("Debe de llamar el ondeletetodo cuando se haga click", () => {
    render(
      <TodoItem
        {...todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
