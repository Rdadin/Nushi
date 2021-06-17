import React from "react";
import logo from "../img/logo.png";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <Link to="/" exact>
          <img src={logo} alt="logo_img" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" exact activeClassName="active">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pedidos" exact activeClassName="active">
              Pedidos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/nosotros" exact activeClassName="active">
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/comococinargyozas" exact activeClassName="active">
              Gyozas
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
