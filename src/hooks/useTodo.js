import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];
const init = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) =>
    dispatch({
      type: "[TODO] Remove todo",
      payload: id,
    });

  const handleToggleTodo = (id) =>
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });

  const allTodos = todos.length;
  const pendingTodos = todos.filter((todo) => todo.done === false).length;

  return {
    todos: todos,
    allTodos,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
