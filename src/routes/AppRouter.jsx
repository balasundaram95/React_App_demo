// src/routes/AppRouter.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

// Import all pages
import DashboardPage from '../pages/DashboardPage';
import TransactionsPage from '../pages/TransactionsPage';
import StatisticsPage from '../pages/StatisticsPage'; // <-- Import new page
import ProductPage from '../pages/ProductPage';       // <-- Import new page
import CategoryPage from '../pages/CategoryPage';     // <-- Import new page
import SettingsPage from '../pages/SettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true, 
        element: <DashboardPage />,
      },
      {
        path: 'transactions',
        element: <TransactionsPage />,
      },
      {
        path: 'statistics', // <-- Add new route
        element: <StatisticsPage />,
      },
      {
        path: 'products', // <-- Add new route
        element: <ProductPage />,
      },
      {
        path: 'categories', // <-- Add new route
        element: <CategoryPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;