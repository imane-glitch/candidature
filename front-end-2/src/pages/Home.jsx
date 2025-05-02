import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidatureForm from "../components/CandidatureForm";
import CandidatureList from "../components/CandidatureList";

const Home = () => {
  const [candidatures, setCandidatures] = useState([]);

  // Récupérer les candidatures depuis l'API
  useEffect(() => {
    const fetchCandidatures = async () => {
      try {
        const { data, status } = await axios.get("http://localhost:8080/api/candidatures");
        if (status === 200 && Array.isArray(data)) setCandidatures(data);
      } catch (error) {
        console.log("Erreur lors de la récupération des candidatures :", error);
      }
    };
    fetchCandidatures();
  }, []);

  // Ajouter une nouvelle candidature
  const addCandidature = async (candidature) => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/candidatures/ajouter", candidature);
      if (data && data.response) {
        setCandidatures(prev => [...prev, data.response]);
      }
    } catch (error) {
      console.log("Erreur lors de l'ajout :", error);
    }
  };

  // Mettre à jour le statut d'une candidature
  const updateCandidatureStatus = async (id, newStatus) => {
    try {
      const { data } = await axios.put(`http://localhost:8080/api/candidatures/${id}`, { status: newStatus });
      if (data && data.response) {
        setCandidatures(prev => prev.map(c => c._id === id ? data.response : c));
      }
    } catch (error) {
      console.log("Erreur lors de la mise à jour du statut :", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mes Candidatures</h1>
      <CandidatureForm addCandidature={addCandidature} />
      <CandidatureList candidatures={Array.isArray(candidatures) ? candidatures : []} onStatusChange={updateCandidatureStatus} />
    </div>
  );
};

export default Home;
