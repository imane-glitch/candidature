import { useState } from "react";
import "./CandidatureForm.css"; 
const CandidatureForm = ({ addCandidature }) => {
  const [formData, setFormData] = useState({
    entreprise: "",
    poste: "",
    lien: "",
    date: new Date().toISOString().split("T")[0], 
    statut: "En attente",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCandidature(formData);
    setFormData({
      entreprise: "",
      poste: "",
      lien: "",
      date: new Date().toISOString().split("T")[0],
      statut: "En attente",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="candidature-form">
      <div className="form-group">
        <label htmlFor="entreprise"></label>
        <input
          type="text"
          name="entreprise"
          id="entreprise"
          placeholder="Nom de l'entreprise"
          value={formData.entreprise}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="poste"></label>
        <input
          type="text"
          name="poste"
          id="poste"
          placeholder="Nom du poste"
          value={formData.poste}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lien"></label>
        <input
          type="url"
          name="lien"
          id="lien"
          placeholder="Lien de l'offre"
          value={formData.lien}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date"></label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="statut"></label>
        <select
          name="statut"
          id="statut"
          value={formData.statut}
          onChange={handleChange}
          className={`statut-${formData.statut.toLowerCase()}`}
        >
          <option value="En attente">En attente</option>
          <option value="Acceptée">Acceptée</option>
          <option value="Refusée">Refusée</option>
        </select>
      </div>

      <button type="submit" className="ajouter-btn">
        Ajouter
      </button>
    </form>
  );
};

export default CandidatureForm;
