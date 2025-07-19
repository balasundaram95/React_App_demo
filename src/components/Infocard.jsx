// src/components/InfoCard.jsx

import React from 'react';

const RedBagImage = () => ( <div className="relative h-24 w-full flex items-center justify-center my-1"><div className="absolute h-10 w-28 bg-gray-200/50 rounded-[50%] blur-md"></div><div className="relative text-4xl drop-shadow-lg">👜</div></div> );

function InfoCard() {
  return (
    // The h-full class is critical for this layout to work.
    <div className="bg-white p-4 rounded-2xl shadow-sm text-center flex flex-col justify-between h-full">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Upgrade to PRO</p>
        <RedBagImage />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800">$29 <span className="font-normal text-base">p/m</span></p>
        <p className="text-xs text-gray-500 mt-1">100% insurance for your goods</p>
      </div>
    </div>
  );
}

export default InfoCard;