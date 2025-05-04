import React from 'react';

const SuiviRelances = () => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#e0f7fa',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontSize: '18px',
      color: '#00796b',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <span role="img" aria-label="bulle de discussion" style={{ fontSize: '24px' }}>🔔</span>
      <span>N&apos;oublie pas de relancer</span>
    </div>
  );
};

export default SuiviRelances;

