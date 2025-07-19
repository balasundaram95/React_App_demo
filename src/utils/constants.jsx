import React from 'react';

// Placeholder icons - in a real app, use a library like 'react-icons'
const SummaryIcon = () => <span>📊</span>;
const TransactionIcon = () => <span>↔️</span>;
const StatsIcon = () => <span>📈</span>;
const ProductIcon = () => <span>📦</span>;
const CategoryIcon = () => <span>🗂️</span>;

// Navigation links for the Sidebar
export const NAV_LINKS = [
  { to: '/', label: 'Summary', icon: <SummaryIcon /> },
  { to: '/transactions', label: 'Transaction', icon: <TransactionIcon /> },
  { to: '/statistics', label: 'Statistics', icon: <StatsIcon /> },
  { to: '/products', label: 'Product', icon: <ProductIcon /> },
  { to: '/categories', label: 'Category', icon: <CategoryIcon /> },
];