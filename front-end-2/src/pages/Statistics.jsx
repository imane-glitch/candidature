import React from 'react';
import CandidatureList from '../components/CandidatureList';
import '../components/CandidatureList.css';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = {
  'Accepté': '#008000', // green
  'En attente': '#FFA500', // orange
  'Refusé': '#FF0000' // red
};

const Statistics = ({ candidatures }) => {
  const statusCounts = {
    'Accepté': 0,
    'En attente': 0,
    'Refusé': 0
  };

  candidatures.forEach(c => {
    const status = c.status || 'En attente';
    if (statusCounts[status] !== undefined) {
      statusCounts[status]++;
    }
  });

  const data = Object.keys(statusCounts).map(key => ({
    name: key,
    value: statusCounts[key]
  }));

  return (
    <div className="stats-page">
      <h1 className="section-title">Mes statistiques</h1>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <CandidatureList candidatures={candidatures} />
    </div>
  );
};

export default Statistics;
