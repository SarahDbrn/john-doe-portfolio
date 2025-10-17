import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <p className="small">40 rue Laure Diebold<br/>69009 Lyon, France<br/>10 20 30 40 50<br/>john.doe@gmail.com</p>
            <div className="socials">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer nofollow" className="me-2"><i className="bi bi-github footer-icon"></i></a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer nofollow" className="me-2"><i className="bi bi-twitter footer-icon"></i></a>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer nofollow"><i className="bi bi-linkedin footer-icon"></i></a>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled small">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/mentions">Mentions légales</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled small">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
