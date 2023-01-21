const { render, screen, fireEvent } = require("@testing-library/react");
const { Homepage } = require("../../src/09-useContext/Homepage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe("Pruebas en <Homepage/>", () => {
  const user = {
    id: 1,
    name: "Eduardo",
  };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Homepage />
      </UserContext.Provider>
    );

    const pre = screen.getByLabelText("user");
    expect(pre.innerHTML).toBe("null");
  });

  test("Debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <Homepage />
      </UserContext.Provider>
    );

    const pre = screen.getByLabelText("user");
    expect(pre.innerHTML).toBe(JSON.stringify(user));
  });

  test("Debe de verificar que el setUser haya sido llamado", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <Homepage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: "Eduardo",
    });
  });
});
