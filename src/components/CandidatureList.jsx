const CandidatureList = ({ candidatures }) => {
  return (
    <div className="mt-4">
      {candidatures.map((c, index) => (
        <div key={index} className={`p-4 rounded-lg shadow-md mb-2 ${c.statut === "Acceptée" ? "bg-green-200" : c.statut === "Refusée" ? "bg-red-200" : "bg-orange-200"}`}>
          <h3 className="font-bold">{c.entreprise} - {c.poste}</h3>
          <p><a href={c.lien} target="_blank" rel="noopener noreferrer">Voir l'offre</a></p>
          <p>Date d'envoi : {c.date}</p>
          <p>Statut : {c.statut}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidatureList;
