export const TodoItem = ({
  id,
  description,
  done,
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="description"
        onClick={() => onToggleTodo(id)}
        className={`align-self-center ${
          done ? "text-decoration-line-through" : ""
        }`}
      >
        {description}
      </span>

      <button onClick={() => onDeleteTodo(id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
