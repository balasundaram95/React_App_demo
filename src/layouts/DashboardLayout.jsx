// src/layouts/DashboardLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

function DashboardLayout() {
  return (
    <div className="bg-violet-500 h-full w-full p-4 lg:p-6 font-sans">
      <div className="bg-slate-50 rounded-3xl grid grid-cols-12 gap-8 p-18">
        
        {/* === COLUMN 1: SIDEBAR (Present on all pages in this layout) === */}
        <aside className="col-span-12 lg:col-span-2">
          <Sidebar />
        </aside>

        {/* === COLUMN 2: MAIN CONTENT (This will change based on the route) === */}
        <main className="col-span-12 lg:col-span-10 flex flex-col gap-6">
           {/* The Outlet renders the active child route component (e.g., DashboardPage, TransactionsPage) */}
           <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;