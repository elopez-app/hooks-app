import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const handleNavigation = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          useContext
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={handleNavigation} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" className={handleNavigation}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="login" className={handleNavigation}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
