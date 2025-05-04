import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// COMPONENTS
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import Statistics from "./pages/Statistics";
import SuiviRelances from "./pages/SuiviRelances";

function App() {
  const [candidatures, setCandidatures] = useState([]);

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route 
          index 
          element={
            <Home 
              candidatures={candidatures} 
              addCandidature={addCandidature} 
              updateCandidatureStatus={updateCandidatureStatus} 
            />
          } 
        />
        <Route path="post" element={<Form addCandidature={addCandidature} />} />
        <Route path="modifier/:id" element={<Form addCandidature={addCandidature} />} />
        <Route 
          path="statistiques" 
          element={<Statistics candidatures={candidatures} />} 
        />
        <Route 
          path="suivi-relances" 
          element={<SuiviRelances candidatures={candidatures} updateCandidatureStatus={updateCandidatureStatus} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
