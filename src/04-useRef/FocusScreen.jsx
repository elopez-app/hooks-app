import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onclick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button onClick={onclick} className="btn btn-primary mt-2">
        Set focus
      </button>
    </>
  );
};
