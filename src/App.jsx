import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import DashboardPage from './Pages/DashboardPage';
import OrderManagementPage from './Pages/OrderManagementPage';
import ProductsPage from './Pages/ProductsPage';
import TransactionPage from './Pages/TransactionPage';
import CustomersPage from './Pages/CustomersPage'; // Updated import
import AppBar from './Components/AppBar';

// Placeholder component for unimplemented views
const PlaceholderView = ({ title }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800">
      {title}
    </h1>
    <p className="mt-2 text-gray-600">
      This section is under development.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="w-full relative h-dvh  ">
        <AppBar/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="orders" element={<OrderManagementPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="transactions" element={<TransactionPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="add-products" element={<PlaceholderView title="Add Products" />} />
            <Route path="shipments" element={<PlaceholderView title="Shipments" />} />
            <Route path="settings" element={<PlaceholderView title="Settings" />} />
            
            <Route path="*" element={<PlaceholderView title="Page Not Found" />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;