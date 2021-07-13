import React from "react";
import logo from "../img/logo.png";
import { NavLink, Link } from "react-router-dom";

const showLoader = () => {
  const loader = document.querySelector(".loader-container");
  loader.style.display = "flex";
  console.log("sdfdsf");
};

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
            <NavLink to="/" exact activeClassName="active" onClick={showLoader}>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/menu"
              exact
              activeClassName="active"
              onClick={showLoader}
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pedidos"
              exact
              activeClassName="active"
              onClick={showLoader}
            >
              Pedidos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/nosotros"
              exact
              activeClassName="active"
              onClick={showLoader}
            >
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/comococinargyozas"
              exact
              activeClassName="active"
              onClick={showLoader}
            >
              Gyozas
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
