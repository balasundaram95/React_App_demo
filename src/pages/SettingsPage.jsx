// src/pages/SettingsPage.jsx

import React from 'react';
import Header from '../components/Header';

function SettingsPage() {
  return (
    <>
        <Header />
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">Settings</h2>
            <p className="mt-2 text-gray-600">User profile and application settings form would be here.</p>
            {/* Placeholder for form fields */}
        </div>
    </>
  );
}

export default SettingsPage;