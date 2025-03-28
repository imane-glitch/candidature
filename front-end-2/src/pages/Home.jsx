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
        const { data, status } = await axios.get("http://localhost:8000/api/candidatures/get");
        if (status === 200) setCandidatures(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCandidatures();
  }, []);

  // Ajouter une nouvelle candidature
  const addCandidature = async (candidature) => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/candidatures/add", candidature);
      setCandidatures([...candidatures, data]); // Mettre à jour la liste après ajout
    } catch (error) {
      console.log("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4"> Mes Candidatures</h1>
      <CandidatureForm addCandidature={addCandidature} />
      <CandidatureList candidatures={candidatures} />
    </div>
  );
};

export default Home;