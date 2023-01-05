import { useCallback, useState } from "react";
import { ShowIncrement } from "./components/ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>Use Callback hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
