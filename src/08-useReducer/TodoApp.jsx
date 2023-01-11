import { useTodo } from "../hooks";
import { TodoList, TodoAdd } from "./components";

export const TodoApp = () => {
  const {
    todos,
    allTodos,
    pendingTodos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {allTodos}, <small>Pendientes: {pendingTodos}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h5>Agregar TODO</h5>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
