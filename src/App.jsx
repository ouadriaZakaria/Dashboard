import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import OrderManagement from "./Components/OrderManagement";
import Customers from "./Components/Customers";
import Transaction from "./Components/Transaction";
import ProductsList from "./Components/ProductsList";

// Constants for better maintainability
const VIEWS = {
  DASHBOARD: 'dashboard',
  ORDER_MANAGEMENT: 'orderManagement',
  CUSTOMERS: 'customers',
  TRANSACTIONS: 'transactions',
  SHIPMENTS: 'shipments',
  ADD_PRODUCTS: 'addProducts',
  PRODUCT_LIST: 'productList',
  SETTINGS: 'settings'
};

const NAVIGATION_EVENT = 'app:navigate';

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.DASHBOARD);

  // Memoized navigation handler
  const handleNavigation = useCallback((view) => {
    if (Object.values(VIEWS).includes(view)) {
      setCurrentView(view);
    }
  }, []);

  // Event listener for navigation
  useEffect(() => {
    const handleNavigationEvent = (event) => {
      const { view } = event.detail;
      handleNavigation(view);
    };

    // Add event listener
    window.addEventListener(NAVIGATION_EVENT, handleNavigationEvent);

    // Cleanup event listener
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, handleNavigationEvent);
    };
  }, [handleNavigation]);

  // Utility function to dispatch navigation events
  const dispatchNavigationEvent = useCallback((view) => {
    const event = new CustomEvent(NAVIGATION_EVENT, {
      detail: { view }
    });
    window.dispatchEvent(event);
  }, []);

  // Component mapping for better organization
  const componentMap = {
    [VIEWS.DASHBOARD]: Dashboard,
    [VIEWS.ORDER_MANAGEMENT]: OrderManagement,
    [VIEWS.CUSTOMERS]: Customers,
    [VIEWS.TRANSACTIONS]: Transaction,
    [VIEWS.PRODUCT_LIST]: ProductsList,
    [VIEWS.SHIPMENTS]: () => <PlaceholderView title="Shipments" />,
    [VIEWS.ADD_PRODUCTS]: () => <PlaceholderView title="Add Products" />,
    [VIEWS.SETTINGS]: () => <PlaceholderView title="Settings" />
  };

  // Render main content based on current view
  const renderMainContent = () => {
    const Component = componentMap[currentView] || componentMap[VIEWS.DASHBOARD];
    
    // Special handling for Transaction component that needs padding wrapper
    if (currentView === VIEWS.TRANSACTIONS) {
      return (
        <div className="p-6">
          <Component />
        </div>
      );
    }
    
    return <Component />;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        currentView={currentView} 
        onNavigate={handleNavigation}
        dispatchNavigationEvent={dispatchNavigationEvent}
      />
      <main className="flex-1 overflow-auto" role="main">
        {renderMainContent()}
      </main>
    </div>
  );
}

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

export default App;