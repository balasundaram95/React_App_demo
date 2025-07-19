// src/pages/DashboardPage.jsx

import React from 'react';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import InfoCard from '../components/InfoCard';
import ActivityItem from '../components/ActivityItem';

// --- Placeholder Components ---
const FinanceChart = () => <div className="h-16 w-48 bg-gray-100 rounded-md" />;
const OrderRow = ({ orderId, product, date, price, status, statusColor }) => ( <div className="grid grid-cols-5 gap-4 items-center py-2 text-sm text-gray-600 border-b last:border-none"><span className="font-semibold text-gray-800">{orderId}</span><span>{product}</span><span>{date}</span><span>{price}</span><span className={`font-semibold text-xs py-1 px-2 rounded-full w-fit ${statusColor}`}>{status}</span></div> );
const CategoryCard = ({ icon, title, value, color }) => ( <div className={`${color} p-3 rounded-2xl`}><span className="text-xl mb-2 block">{icon}</span><p className="font-bold text-sm text-gray-800">{title}</p><p className="text-xs text-gray-600">{value}</p></div> );

// MISSING COMPONENT: The circular "START" button needs to be defined.
const StartButton = () => (
    <div className="relative w-16 h-16">
        <svg className="w-full h-full" viewBox="0 0 36 36">
            <path className="stroke-current text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="2" />
            <path className="stroke-current text-violet-600" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="text-xs font-bold text-gray-600">START</button>
        </div>
    </div>
);


// --- Main Page Component ---
function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      
      {/* === Main Content Area === */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="CUSTOMERS" value="54,235" />
          <StatCard title="INCOME" value="$980,632" />
          <StatCard title="PRODUCTS SOLD" value="5,490" />
        </div>

        {/* ======================================================= */}
        {/* === CORRECTED MARKETPLACE SECTION                   === */}
        {/* ======================================================= */}
        <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Marketplace</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* --- Left Column: Contains the 2 stacked cards --- */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {/* Card 1: Data Analytics */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-lg text-gray-800">Data Analytics Overview</h3>
                            <p className="text-sm text-gray-500 mt-1">See how your account grow and how you can boost it.</p>
                        </div>
                        <StartButton /> {/* <-- Component was missing */}
                    </div>

                    {/* Card 2: Finance Flow */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-lg text-gray-800">Finance Flow</h3>
                            <div className="flex items-end gap-2 mt-1">
                                <p className="text-xl font-bold text-gray-900">$2,530</p>
                                <p className="text-xs text-gray-500 mb-1">September 2021</p>
                            </div>
                        </div>
                        <FinanceChart /> {/* <-- Component was defined but not used */}
                    </div>
                </div>

                {/* --- Right Column: Contains the single InfoCard --- */}
                <div className="lg:col-span-1">
                    <InfoCard />
                </div>

            </div>
        </div>

        {/* Recent Orders card remains below */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-1"><h3 className="font-bold text-lg text-gray-800">Recent Orders</h3><a href="#" className="text-sm text-violet-600 hover:underline font-semibold">SEE ALL</a></div>
            <div><OrderRow orderId="#1235465" product="DJI Mavic Pro 2" date="Sep 16, 2021" price="$42.00" status="Delivered" statusColor="bg-green-100 text-green-700" /><OrderRow orderId="#1235468" product="iPad Pro 2017 Model" date="Sep 15, 2021" price="$932.00" status="Canceled" statusColor="bg-red-100 text-red-700" /></div>
        </div>
      </div>

      {/* === Right Summary Column === */}
      <aside className="lg:col-span-1 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800">Summary</h2>
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Your Balance</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">$10,632.00</p>
        </div>
        <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-gray-800">Activity</h3>
              <a href="#" className="text-sm text-gray-500 hover:underline font-semibold">SEE ALL</a>
            </div>
            <div className="flex flex-col gap-2">
                <ActivityItem title="Withdraw Earning" time="12:40 am" amount="$4,120" />
                <ActivityItem title="Paying Website tax" time="10:20 am" amount="-$230" isNegative={true} />
            </div>
        </div>
        <div>
            <h3 className="font-bold text-lg text-gray-800">Top Categories</h3>
            <p className="text-sm text-gray-500 mt-1">Explore your top categories and keep shopping with cashback.</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
                <CategoryCard icon="👟" title="Footwear" value="18,941 units" color="bg-yellow-100" />
                <CategoryCard icon="🧤" title="Accessories" value="26,061 units" color="bg-green-100" />
            </div>
        </div>
      </aside>
    </div>
  );
}

export default DashboardPage;