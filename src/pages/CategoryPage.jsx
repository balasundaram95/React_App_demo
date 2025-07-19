// src/pages/CategoryPage.jsx

import React from 'react';
import Header from '../components/Header';

// A simple placeholder card for a single category
const CategoryItemCard = ({ name, itemCount }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{itemCount} products</p>
    </div>
);


function CategoryPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-gray-800">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* You would map over your category data to render these cards */}
            <CategoryItemCard name="Footwear" itemCount={18941} />
            <CategoryItemCard name="Accessories" itemCount={26061} />
            <CategoryItemCard name="Apparel" itemCount={12534} />
            <CategoryItemCard name="Electronics" itemCount={8765} />
            <CategoryItemCard name="Home Goods" itemCount={15234} />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;