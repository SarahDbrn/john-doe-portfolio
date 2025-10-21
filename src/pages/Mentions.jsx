import React from "react";

export default function MentionsLegales() {
  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Mentions légales</h1>

      <div className="accordion" id="mentionsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#editor"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="editor"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              John Doe - détails...
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#host"
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
              alwaysdata
              <br />
              91 Rue du Faubourg Saint-Honoré, 75008 Paris
              <br />
              <a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#credits"
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

