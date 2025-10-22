import React from "react";

export default function MentionsLegales() {
  return (
    <section className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Mentions légales
      </h1>
      <div
        className="mx-auto mb-5"
        style={{
          width: "200px",
          height: "4px",
          backgroundColor: "#0d6efd", // bleu Bootstrap
        }}
      ></div>

      <div className="accordion" id="mentionsAccordion">
        {/* --- Éditeur du site --- */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#editor"
              aria-expanded="false"
              aria-controls="editor"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="editor"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              John Doe<br />
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              10 20 30 40 50<br />
              john.doe@gmail.com
            </div>
          </div>
        </div>

        {/* --- Hébergeur --- */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#host"
              aria-expanded="false"
              aria-controls="host"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="host"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <h5 className="fw-bold mb-2">alwaysdata</h5>
              91 Rue du Faubourg Saint-Honoré, 75008 Paris
              <br />
              <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                www.alwaysdata.com
              </a>
            </div>
          </div>
        </div>

        {/* --- Crédits --- */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#credits"
              aria-expanded="false"
              aria-controls="credits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="credits"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              Images : Pixabay — Favicon : Flaticon — Site réalisé par John Doe.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
