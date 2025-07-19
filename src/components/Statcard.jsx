// src/components/StatCard.jsx

import React from 'react';

function StatCard({ title, value }) {
  return (
    <div className="bg-violet-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
      <p className="text-sm font-light uppercase tracking-wider">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
      {/* Decorative background elements can be added here */}
    </div>
  );
}

export default StatCard;