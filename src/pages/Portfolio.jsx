import React from "react";
import heroPortfolio from "../assets/portfolio/banner.jpg"; // image du bandeau bleu
import freshFood from "../assets/portfolio/fresh-food.jpg";
import akira from "../assets/portfolio/restaurant-japonais.jpg";
import bienEtre from "../assets/portfolio/espace-bien-etre.jpg";
import seo from "../assets/portfolio/seo.jpg";
import api from "../assets/portfolio/coder.jpg";
import maquette from "../assets/portfolio/screens.jpg";

export default function Portfolio() {
  const projets = [
    {
      titre: "Fresh Food",
      desc: "Site de vente de produits frais en ligne",
      techno: "Site réalisé avec PHP et MySQL",
      image: freshFood,
    },
    {
      titre: "Restaurant Akira",
      desc: "Site de vente de produits frais en ligne",
      techno: "Site réalisé avec WordPress",
      image: akira,
    },
    {
      titre: "Espace bien-être",
      desc: "Site de vente de produits frais en ligne",
      techno: "Site réalisé avec LARAVEL",
      image: bienEtre,
    },
    {
      titre: "SEO",
      desc: "Amélioration du référencement d’un site e-commerce",
      techno: "Utilisation des outils SEO",
      image: seo,
    },
    {
      titre: "Création d’une API",
      desc: "Création d’une API RESTFUL publique",
      techno: "PHP - SYMFONY",
      image: api,
    },
    {
      titre: "Maquette d’un site web",
      desc: "Création d’un prototype de site",
      techno: "Réalisé avec FIGMA",
      image: maquette,
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          minHeight: "35vh",
          backgroundImage: `url(${heroPortfolio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}>
        </div>
      </section>

      {/* TITRE + SOUS-TITRE */}
      <section className="container text-center my-5">
        <h1 className="fw-bold">Portfolio</h1>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
        <hr
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "#007bff",
            margin: "20px auto",
            border: "none",
          }}
        />
      </section>

      {/* CARTES DE PROJETS */}
      <section className="container pb-5">
        <div className="row">
          {projets.map((p, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.titre}
                  style={{ height: "200px", objectFit: "cover" }}/>
                    <div className="card h-100 d-flex flex-column">
                        <div className="card-body text-center flex-grow-1">
                        <h5 className="card-title fw-bold">{p.titre}</h5>
                        <p className="card-text">{p.desc}</p>
                        <a href="#" className="btn btn-primary mb-3">Voir le site</a>
                        </div>
                        <div className="card-footer bg-light text-muted text-center small py-2">
                        {p.techno}
                        </div>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
