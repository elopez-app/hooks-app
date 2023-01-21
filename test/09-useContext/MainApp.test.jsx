import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <MainApp/ >", () => {
  test("Debe de mostrar el homepage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("Homepage")).toBeTruthy();
  });

  test("Debe de mostrar el loginpage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("Login Page")).toBeTruthy();
  });

  test("Debe de mostrar el loginpage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("About page")).toBeTruthy();
  });
});
