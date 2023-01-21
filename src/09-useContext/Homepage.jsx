import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Homepage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Homepage</h1>
      <hr />

      <pre aria-label="user">{JSON.stringify(user)}</pre>

      <button
        onClick={() =>
          setUser({
            id: 1,
            name: "Eduardo",
          })
        }
        className="btn btn-primary"
      >
        Establecer usuario
      </button>
    </>
  );
};
