import React, { useState } from "react";

const Sidebar = ({ currentView, onNavigate }) => {
  const [close, setsetClose] = useState(false);
  // Simple SVG Icons
  const HomeIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const ClipboardIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-users-round-icon lucide-users-round"
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  );

  const CreditCardIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  );

  const TruckIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const PlusIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );

  const ListIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );

  const SettingsIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const sidebarItems = [
    { name: "Dashboard", icon: HomeIcon, view: "dashboard" },
    { name: "Order Management", icon: ClipboardIcon, view: "orderManagement" },
    { name: "Customers", icon: UsersIcon, view: "customers" },
    { name: "Transaction", icon: CreditCardIcon, view: "transactions" },
    { name: "Shipments", icon: TruckIcon, view: "shipments" },
  ];

  const productItems = [
    { name: "Add Products", icon: PlusIcon, view: "addProducts" },
    { name: "Product List", icon: ListIcon, view: "productList" },
  ];

  const handleNavigation = (view) => {
    onNavigate(view);
  };

  return (
    <div
      className={`overflow-hidden   ${
        close ? "w-8 bg-gray-50 pl-5" : "w-64 border-r bg-white shadow-sm"
      } lg:relative absolute lg:min-w-72 left-0 top-0 z-30    border-gray-200 `}
    >
      <button
        onClick={() => setsetClose(!close)}
        className={`absolute lg:hidden top-[50%] left-1 text-gray-500 cursor-pointer hover:text-gray-700 transition-transform transform ${
          close ? "" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-panel-right-close-icon lucide-panel-right-close"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M15 3v18" />
          <path d="m8 9 3 3-3 3" />
        </svg>
      </button>
      <div className="p-6 flex justify-between items-center ">
        <h2 className="text-l font-bold text-gray-500">MAIN MENU</h2>
        <button
          onClick={() => setsetClose(!close)}
          className="text-gray-500 lg:hidden cursor-pointer hover:text-gray-700 text-lg focus:outline-none"
        >
          X
        </button>
      </div>

      <nav className="mt-2">
        <div className="px-6">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.view)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-l-lg mb-1 text-left ${
                currentView === item.view
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon />
              <span className="ml-3">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 px-6">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            PRODUCTS
          </h3>
          <div className="mt-4">
            {productItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.view)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-l-lg mb-1 text-left ${
                  currentView === item.view
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon />
                <span className="ml-3">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 px-6">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            ADMIN
          </h3>
          <div className="mt-4">
            <button
              onClick={() => handleNavigation("settings")}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-l-lg text-left ${
                currentView === "settings"
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <SettingsIcon />
              <span className="ml-3">Settings</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
