import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidatureForm from "../components/CandidatureForm";
import CandidatureList from "../components/CandidatureList";

const Home = ({ candidatures, addCandidature, updateCandidatureStatus }) => {
  const [localCandidatures, setLocalCandidatures] = useState(candidatures || []);

  useEffect(() => {
    setLocalCandidatures(candidatures || []);
  }, [candidatures]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/candidatures/${id}`);
      setLocalCandidatures(prev => prev.filter(c => c._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleUpdate = async (id, updatedFields) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/api/candidatures/${id}`, updatedFields);
      if (data && data.response) {
        setLocalCandidatures(prev => prev.map(c => c._id === id ? data.response : c));
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mes Candidatures</h1>
      <CandidatureForm addCandidature={addCandidature} />
      <CandidatureList 
        candidatures={localCandidatures} 
        onStatusChange={(id, status) => handleUpdate(id, { status })}
        onDelete={handleDelete}
        onFieldChange={handleUpdate}
      />
    </div>
  );
};

export default Home;
