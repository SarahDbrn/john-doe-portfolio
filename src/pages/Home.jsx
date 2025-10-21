import React from "react";
import GithubModal from "../components/GithubModal";
import heroImg from "../assets/images/hero-bg.jpg";
import profilImg from "../assets/images/john-doe-about.jpg"; // ajoute une image de profil ici

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "80vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay sombre */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            zIndex: 1,
          }}
        ></div>

        {/* Contenu HERO */}
        <div className="position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-3">Bonjour, je suis John Doe</h1>
          <h2 className="display-5 fw-bold mb-3">Développeur web full-stack</h2>
          <button className="btn btn-danger">En savoir plus</button>
        </div>
      </section>

      {/* ABOUT + COMPÉTENCES */}
      <section className="container py-5">
        <div
          className="shadow p-4 bg-white rounded"
        >
          <div className="row">
            
            {/* À PROPOS */}
            <div className="col-md-6">
              <h3 className="border-bottom pb-2 mb-4 text-primary">À propos</h3>
                <div className="text-center mb-4">
                        <img
                    src={profilImg}
                    alt="John Doe"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    />
                </div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
                consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
                enim placeat? Natus, neque aut?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
                consectetur tempore perferendis nostrum.
                </p>
            </div>

            {/* COMPÉTENCES */}
            <div className="col-md-6">
              <h3 className="border-bottom pb-2 mb-4 text-primary">
                Mes compétences
              </h3>

              {[
                { name: "HTML5", value: 90, color: "#e44d26" },
                { name: "CSS3", value: 80, color: "#264de4" },
                { name: "JAVASCRIPT", value: 70, color: "#f7df1e" },
                { name: "PHP", value: 60, color: "#777bb3" },
                { name: "REACT", value: 50, color: "#61dafb" },
              ].map((skill) => (
                <div key={skill.name} className="mb-3">
                  <label>{skill.name} {skill.value}%</label>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${skill.value}%`,
                        backgroundColor: skill.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

