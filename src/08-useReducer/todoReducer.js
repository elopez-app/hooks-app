export const todoReducer = (initialState = [], { type, payload }) => {
  switch (type) {
    case "[TODO] Add todo":
      return [...initialState, payload];
    case "[TODO] Remove todo":
      return initialState.filter((todo) => todo.id !== payload);
    case "[TODO] Toggle todo":
      return initialState.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
