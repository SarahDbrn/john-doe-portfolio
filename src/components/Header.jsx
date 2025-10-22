import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }) => isActive ? "nav-link active-link" : "nav-link";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">JOHN DOE</NavLink>
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

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" end className={navClass}>ACCUEIL</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={navClass}>SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={navClass}>PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={navClass}>CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentions" className={navClass}>MENTIONS LÉGALES</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
