import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Nom à gauche */}
          <div className="navbar-brand fw-bold brand-left">JOHN DOE</div>

          {/* Menu burger mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens à droite */}
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink to="/" end className={navClass}>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={navClass}>
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={navClass}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={navClass}>
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentions" className={navClass}>
                  MENTIONS LÉGALES
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
