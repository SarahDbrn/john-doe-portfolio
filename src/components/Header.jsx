import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
  const navClass = ({isActive}) => isActive ? "nav-link active-link" : "nav-link";
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">JOHN DOE</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink to="/" end className={navClass}>HOME</NavLink></li>
              <li className="nav-item"><NavLink to="/Services" className={navClass}>SERVICES</NavLink></li>
              <li className="nav-item"><NavLink to="/Portfolio" className={navClass}>PORTFOLIO</NavLink></li>
              <li className="nav-item"><NavLink to="/Contact" className={navClass}>CONTACT</NavLink></li>
              <li className="nav-item"><NavLink to="/Mentions" className={navClass}>MENTIONS LÉGALES</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
