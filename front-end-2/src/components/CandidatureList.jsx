import React from "react";
import "./CandidatureForm.css";
import "./CandidatureList.css";

const CandidatureList = ({ candidatures, onStatusChange, onDelete, onFieldChange }) => {
  const handleStatusChange = (id, newStatus) => {
    if (onStatusChange) {
      onStatusChange(id, newStatus);
    }
  };

  const handleFieldChange = (id, field, value) => {
    if (onFieldChange) {
      onFieldChange(id, { [field]: value });
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
            <input
              type="text"
              value={c.entreprise}
              onChange={(e) => handleFieldChange(c._id, "entreprise", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Poste</label>
            <input
              type="text"
              value={c.post}
              onChange={(e) => handleFieldChange(c._id, "post", e.target.value)}
              className="w-full p-2 border rounded"
            />
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
            <input
              type="date"
              value={new Date(c.date).toISOString().split("T")[0]}
              onChange={(e) => handleFieldChange(c._id, "date", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "8px" }}>Statut</label>
            <select
              value={c.status || "En attente"}
              onChange={(e) => handleStatusChange(c._id, e.target.value)}
              className={`p-2 border rounded statut-${(c.status || "En attente").toLowerCase()}`}
              style={{ borderRadius: "6px 0 0 6px" }}
            >
              <option value="En attente">En attente</option>
              <option value="Accepté">Accepté</option>
              <option value="Refusé">Refusé</option>
            </select>
            <button
              type="button"
              onClick={() => onDelete && onDelete(c._id)}
              className="text-red-600 text-xl"
              aria-label="Supprimer la candidature"
              title="Supprimer la candidature"
              style={{
                background: "none",
                cursor: "pointer",
                padding: "0 8px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                borderRadius: "0 6px 6px 0",
                marginLeft: "-1px"
              }}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidatureList;
