import React from "react";
import heroServices from "../assets/portfolio/banner.jpg"; // image du bandeau bleu

const services = [
  {title:"UX Design", 
   desc:"L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc) e plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible", 
   icon:"bi bi-window"},
  {title:"E-commerce", desc:"Boutiques modernes", icon:"bi bi-cart"},
  {title:"API / Back-end", desc:"Node / Express", icon:"bi bi-server"},
];

export default function Services(){
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
        <section className="container py-5">
            <h1 className="text-center mb-4">Mon offre de services</h1>
            <div className="row">
                {services.map((s,i)=>(
                <div className="col-md-4 mb-4" key={i}>
                    <div className="card service-card h-100">
                        <div className="card-body">
                        <i className={`${s.icon} fs-3`}></i>
                        <h5 className="card-title mt-3">{s.title}</h5>
                        <p className="card-text">{s.desc}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </div>
  );
}
