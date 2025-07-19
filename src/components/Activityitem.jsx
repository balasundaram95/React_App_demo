// src/components/ActivityItem.jsx

import React from 'react';

// Placeholder icons
const WalletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const TaxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2-2m-2 2l-2-2m2 2V3l2 2m-2-2l-2 2m10 14l2-2m-2 2l-2-2m2 2V3l2 2m-2-2l-2 2M3 12h6m6 0h6" /></svg>;

function ActivityItem({ title, time, amount, isNegative = false }) {
  const iconMap = {
    "Withdraw Earning": <WalletIcon />,
    "Paying Website tax": <TaxIcon />,
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center">
          {iconMap[title]}
        </div>
        <div>
          <p className="font-bold text-sm text-gray-800">{title}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <p className={`font-bold text-sm ${isNegative ? 'text-red-500' : 'text-gray-800'}`}>
        {amount}
      </p>
    </div>
  );
}

export default ActivityItem;