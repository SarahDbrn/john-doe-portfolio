import React from "react";
import heroServices from "../assets/portfolio/banner.jpg"; // ton image du bandeau

const services = [
  {
    title: "UX Design",
    desc: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    icon: "bi bi-brush",
  },
  {
    title: "Développement web",
    desc: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
    icon: "bi bi-code-slash",
  },
  {
    title: "Référencement",
    desc: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    icon: "bi bi-search",
  },
];

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          minHeight: "35vh",
          backgroundImage: `url(${heroServices})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      ></section>

      {/* SERVICES */}
      <section className="container py-5">
        <h1 className="text-center fw-bold mb-2">Mon offre de services</h1>
        <p className="text-center text-muted mb-4">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className="underline mx-auto mb-5"></div>

        <div className="row">
          {services.map((s, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card text-center border-0 shadow-sm h-100 service-card">
                <div className="card-body">
                  <i className={`${s.icon} text-primary fs-1`}></i>
                  <h5 className="card-title fw-bold mt-3">{s.title}</h5>
                  <p className="card-text text-muted">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
