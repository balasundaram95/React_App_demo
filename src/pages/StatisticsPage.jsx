// src/pages/StatisticsPage.jsx

import React from 'react';
import Header from '../components/Header';

// Placeholder for a large chart component
const DetailedChart = ({ title }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-96">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <div className="flex items-center justify-center h-full text-gray-400">
            [Chart Area]
        </div>
    </div>
);

function StatisticsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-800">Detailed Statistics</h2>
        <p className="text-gray-600">
            An overview of your business performance, sales trends, and customer engagement over time.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DetailedChart title="Sales Over Time (Last 12 Months)" />
            <DetailedChart title="Revenue by Product Category" />
        </div>
      </div>
    </>
  );
}

export default StatisticsPage;