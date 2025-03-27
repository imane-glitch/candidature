import React, { useState } from "react";

const Form = () => {
  //  Entreprise, Poste, Lien de l’offre, Date d’envoi, Statut (En attente, Acceptée, Refusée).
  const [candidature, setCandidature] = useState({
    entreprise: "",
    post: "",
    lien: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCandidature(prevCandidature => ({ ...prevCandidature, [name]: value  }));
  };

  const handleSubmit = (event) => {
    // requete api
    event.preventDefault()
    try {
      // requete fetch ou axios pour envoyer le post en bdd
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <input
          placeholder="entreprise"
          type="text"
          name="entreprise"
          onChange={handleChange}
        />
        <input
          placeholder="post"
          type="text"
          name="post"
          onChange={handleChange}
        />
        <input
          placeholder="lien"
          type="text"
          name="lien"
          onChange={handleChange}
        />
        <button>Valide</button>
      </form>
    </div>
  );
};

export default Form;
