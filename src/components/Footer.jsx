import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          {/* COLONNE 1 - Coordonnées */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">John Doe</h6>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>
            <div className="social-icons">
                <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="me-3"><i className="bi bi-github"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        
          {/* COLONNE 2 - Liens utiles */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Liens utiles</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Accueil</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/contact" className="footer-link">Me contacter</a></li>
              <li><a href="/mentions-legales" className="footer-link">Mentions légales</a></li>
            </ul>
          </div>

          {/* COLONNE 3 - Réalisations */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Mes dernières réalisations</h6>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>

        {/* Ligne de bas de page */}
        <div className="text-center border-top border-secondary pt-3 mt-3 small text-muted">
          © {new Date().getFullYear()} John Doe — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
