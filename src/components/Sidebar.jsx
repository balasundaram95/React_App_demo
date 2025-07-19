// src/components/Sidebar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom'; // <-- Step 1: Import NavLink

// Placeholder icons
const SummaryIcon = () => <span>📊</span>;
const TransactionIcon = () => <span>↔️</span>;
const StatsIcon = () => <span>📈</span>;
const ProductIcon = () => <span>📦</span>;
const CategoryIcon = () => <span>🗂️</span>;
const SettingsIcon = () => <span>⚙️</span>; // Added for the settings page

// Step 2: Update NavItem to use NavLink
const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to} // <-- Step 3: Use the 'to' prop for the destination path
    // Step 4: Use a function to conditionally apply active styles
    className={({ isActive }) =>
      `flex items-center gap-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-violet-100 text-violet-700' // Style for the active link
          : 'text-gray-600 hover:bg-gray-100' // Style for inactive links
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

function Sidebar() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Logo */}
        <div className="mb-12 flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
                <span className="text-2xl font-black text-gray-700">☽2☾</span>
            </div>
            <div className="font-sans">
                <div className="text-xl font-bold tracking-wider text-gray-800">O2O</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500">BRAND</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500">PROTECTOR</div>
            </div>
        </div>
        
        {/* Navigation - now with correct 'to' paths */}
        <nav>
          <div className="flex flex-col gap-2">
            <NavItem to="/" icon={<SummaryIcon />} label="Summary" />
            <NavItem to="/transactions" icon={<TransactionIcon />} label="Transaction" />
            <NavItem to="/statistics" icon={<StatsIcon />} label="Statistics" />
            <NavItem to="/products" icon={<ProductIcon />} label="Product" />
            <NavItem to="/categories" icon={<CategoryIcon />} label="Category" />
            <NavItem to="/settings" icon={<SettingsIcon />} label="Settings" />
          </div>
        </nav>
      </div>

      {/* User Profile Card */}
      <div className="bg-white p-3 rounded-2xl flex items-center gap-3 shadow-sm">
        <img src="https://i.pravatar.cc/40?img=3" alt="Sally Hawkins" className="w-10 h-10 rounded-full" />
        <div className="flex-grow">
          <p className="font-bold text-sm text-gray-800">Sally Hawkins</p>
          <button className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full mt-1">
            UPGRADE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;