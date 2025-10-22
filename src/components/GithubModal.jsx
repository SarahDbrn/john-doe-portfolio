import React, { useEffect, useState } from "react";

export default function GithubModal({ triggerId = "openGithubModal" }){
  const [data, setData] = useState(null);

  useEffect(() => {
    // récupère une seule fois au montage du composant
    let mounted = true;
    fetch("https://api.github.com/users/github-john-doe")
      .then(res => res.json())
      .then(json => {
        if(mounted) setData(json);
      })
      .catch(err => console.error(err));
    return () => { mounted = false; }
  }, []);

  return (
    <>
      {/* bouton qui ouvre la modal (peut être dans le Hero) */}
      <button id={triggerId} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#githubModal">En savoir plus</button>

      <div className="modal fade" id="githubModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Profil GitHub</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {data ? (
                <div>
                  <div className="d-flex align-items-center">
                    <img src={data.avatar_url} alt={data.login} style={{width:64, height:64, borderRadius:8}}/>
                    <div className="ms-3">
                      <h6 className="mb-0">{data.name || data.login}</h6>
                      <small className="text-muted">{data.bio}</small>
                    </div>
                  </div>
                  <hr/>
                  <p><strong>Public repos:</strong> {data.public_repos}</p>
                  <p><strong>Followers:</strong> {data.followers} — <strong>Following:</strong> {data.following}</p>
                  <a href={data.html_url} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
                </div>
              ) : (
                <div>Chargement…</div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
