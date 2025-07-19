// src/components/Header.jsx

import React, { useState } from 'react';

// --- Icon Components ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// New icon for closing the search bar
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


function Header() {
  // State to manage search bar visibility
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="flex justify-between items-center w-full">
      {/* === Left Side: Title OR Search Bar === */}
      <div className="flex-grow">
        {isSearchVisible ? (
          // Render search bar if state is true
          <div className="relative animate-fade-in-fast">
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full max-w-lg bg-white rounded-xl shadow-sm pl-11 pr-10 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
              autoFocus // Automatically focus the input when it appears
            />
            {/* Close Button */}
            <button
              onClick={() => setIsSearchVisible(false)} // Event to hide the search bar
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-gray-100 p-1 rounded-full"
            >
              <CloseIcon />
            </button>
          </div>
        ) : (
          // Render title if state is false
          <h1 className="text-3xl font-bold text-gray-800 animate-fade-in-fast">
            Business Dashboard
          </h1>
        )}
      </div>

      {/* === Right Side: Action Icons === */}
      <div className="flex items-center gap-4">
        {/* Hide search button when search bar is visible to avoid duplication */}
        {!isSearchVisible && (
            <button
                onClick={() => setIsSearchVisible(true)} // Event to show the search bar
                className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors animate-fade-in-fast"
            >
                <SearchIcon />
            </button>
        )}
        <button className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
          <CalendarIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;