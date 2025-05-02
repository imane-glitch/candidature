 import { useState } from "react";
import "./CandidatureForm.css"; 
const CandidatureForm = ({ addCandidature }) => {
  const [formData, setFormData] = useState({
    entreprise: "",
    post: "",
    lien: "",
    date: new Date().toISOString().split("T")[0], 
    status: "En attente",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCandidature(formData);
    setFormData({
      entreprise: "",
      post: "",
      lien: "",
      date: new Date().toISOString().split("T")[0],
      status: "En attente",
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
        <label htmlFor="post"></label>
        <input
          type="text"
          name="post"
          id="post"
          placeholder="Nom du poste"
          value={formData.post}
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
        <label htmlFor="status"></label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
          className={`statut-${formData.status.toLowerCase()}`}
        >
          <option value="En attente">En attente</option>
          <option value="Accepté">Accepté</option>
          <option value="Refusé">Refusé</option>
        </select>
      </div>

      <button type="submit" className="ajouter-btn">
        Ajouter
      </button>
    </form>
  );
};

export default CandidatureForm;
