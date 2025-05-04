import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidatureForm from "../components/CandidatureForm";
import CandidatureList from "../components/CandidatureList";

const Home = ({ candidatures, addCandidature, updateCandidatureStatus }) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mes Candidatures</h1>
      <CandidatureForm addCandidature={addCandidature} />
      <CandidatureList candidatures={Array.isArray(candidatures) ? candidatures : []} onStatusChange={updateCandidatureStatus} />
    </div>
  );
};

export default Home;
