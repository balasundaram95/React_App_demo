import React from 'react';
import Header from '../components/Header';

function ProductPage() {
  return (
    <>
      <Header />
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Manage Products</h2>
            <button className="bg-violet-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-violet-600 transition-colors">
                + Add Product
            </button>
        </div>
        <p className="text-gray-600">
            A data table with a list of all products would be displayed here, including tools for searching, filtering, and pagination.
        </p>
        {/* Placeholder for Product Data Table */}
      </div>
    </>
  );
}

export default ProductPage;