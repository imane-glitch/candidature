import React from "react";
import "./CandidatureForm.css";
import "./CandidatureList.css";

const CandidatureList = ({ candidatures, onStatusChange }) => {
  const handleStatusChange = (id, newStatus) => {
    if (onStatusChange) {
      onStatusChange(id, newStatus);
    }
  };

  if (!Array.isArray(candidatures) || candidatures.length === 0) {
    return null; // Do not display anything if no candidatures
  }

  return (
    <div className="candidature-form">
      {candidatures.map((c) => (
        <div key={c._id} className="form-group candidature-list-row">
          <div>
            <label>Entreprise</label>
            <input type="text" value={c.entreprise} readOnly className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Poste</label>
            <input type="text" value={c.post} readOnly className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Lien de l'offre</label>
            {c.lien ? (
              <a href={c.lien} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{c.lien}</a>
            ) : (
              <span>N/A</span>
            )}
          </div>
          <div>
            <label>Date d'envoi</label>
            <input type="date" value={new Date(c.date).toISOString().split("T")[0]} readOnly className="w-full p-2 border rounded" />
          </div>
          <div>
            <label>Statut</label>
            <select
              value={c.status || "En attente"}
              onChange={(e) => handleStatusChange(c._id, e.target.value)}
              className={`w-full p-2 border rounded statut-${(c.status || "En attente").toLowerCase()}`}
            >
              <option value="En attente">En attente</option>
              <option value="Accepté">Accepté</option>
              <option value="Refusé">Refusé</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidatureList;
