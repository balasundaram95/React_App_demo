// src/pages/TransactionsPage.jsx

import React from 'react';
import Header from '../components/Header';

function TransactionsPage() {
  return (
    <>
      <Header />
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">Transaction History</h2>
        <p className="mt-2 text-gray-600">A table or list of all transactions would be displayed here.</p>
        {/* Placeholder for a data table */}
      </div>
    </>
  );
}

export default TransactionsPage;