import React, { useState, useEffect } from 'react';
import CandidatureList from '../components/CandidatureList';
import './SuiviRelances.css';

const SuiviRelances = ({ candidatures, updateCandidatureStatus }) => {
  const [localCandidatures, setLocalCandidatures] = useState(candidatures || []);

  useEffect(() => {
    setLocalCandidatures(candidatures || []);
  }, [candidatures]);

  // Filter candidatures including only those with status "En attente"
  const candidaturesARelancer = localCandidatures.filter(c => (c.status || 'En attente') === 'En attente');

  return (
    <div className="suivi-container">
      <div className="suivi-message-box">
        <span role="img" aria-label="bulle de discussion">🔔</span>
        <span>N&apos;oublie pas de relancer</span>
      </div>

      <h2 className="section-title">A relancer</h2>
      <div className="stats-page">
        <CandidatureList 
          candidatures={candidaturesARelancer} 
          onStatusChange={updateCandidatureStatus} 
        />
      </div>
    </div>
  );
};

export default SuiviRelances;

