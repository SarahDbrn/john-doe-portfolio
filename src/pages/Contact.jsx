import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Nom requis";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email invalide";
    if (!form.phone) e.phone = "Téléphone requis";
    if (!form.subject) e.subject = "Sujet requis";
    if (!form.message) e.message = "Message requis";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
    }
  };

  return (
    <section className="container py-5">
      {/* TITRE */}
      <div className="text-center mb-4">
        <h1>Contact</h1>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </p>
      </div>

      {/* CONTENU */}
      <div className="shadow bg-white rounded p-4">
        <div className="row">
          {/* FORMULAIRE */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h5 className="pb-2 mb-4 border-bottom border-primary">Formulaire de contact</h5>
            {sent ? (
              <div className="alert alert-success">Message envoyé !</div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Votre adresse email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Sujet"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                  {errors.subject && <small className="text-danger">{errors.subject}</small>}
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Votre message"
                    rows="6"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>
                <button className="btn btn-primary">Envoyer</button>
              </form>
            )}
          </div>

          {/* COORDONNÉES */}
          <div className="col-md-6">
            <h5 className="pb-2 mb-4 border-bottom border-primary">Mes coordonnées</h5>
            <p>
              <strong>John Doe</strong><br />
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              10 20 30 40 50<br />
              john.doe@gmail.com
            </p>
            <div className="map-responsive">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=40+Rue+Laure+Diebold+69009+Lyon&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
