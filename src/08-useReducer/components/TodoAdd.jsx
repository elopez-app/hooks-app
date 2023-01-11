import { useForm } from "../../hooks";

export const TodoAdd = ({ handleNewTodo }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const { description } = formState;

  const onSubmit = (e) => {
    e.preventDefault();

    if (description.length < 1) return;

    handleNewTodo({
      id: new Date().getTime(),
      description,
      done: false,
    });

    onResetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
