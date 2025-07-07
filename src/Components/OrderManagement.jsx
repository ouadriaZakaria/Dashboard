import React, { useState } from "react";
import Header from "./Header";

const OrderManagement = ({ orders = [] }) => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);

  const tabs = [
    "Pending",
    "Confirmed",
    "Processing",
    "Picked",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const SearchIcon = () => (
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
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const FilterIcon = () => (
    <svg
      className="w-4 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
      />
    </svg>
  );

  const MoreIcon = () => (
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
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );

  // Filter orders based on active tab and search term
  const filteredOrders = orders.filter((order) => {
    const matchesTab = order.status === activeTab;
    const matchesSearch =
      searchTerm === "" ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map((order) => order.id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Confirmed":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-purple-100 text-purple-800";
      case "Picked":
        return "bg-orange-100 text-orange-800";
      case "Shipped":
        return "bg-indigo-100 text-indigo-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="w-full bg-gray-50 pb-18 lg:p-5 overflow-y-auto h-full">
      <div className="flex-1 w-full">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="border-b hidden lg:block border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Search and Filter */}
          <div className="p-3 lg:p-6 border-b border-gray-200">
            <div className="flex  flex-col lg:flex-row lg:items-center justify-between">
              <div className="relative  ">
                <input
                  type="text"
                  placeholder="Search by order id.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full lg:w-fit pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <SearchIcon />
                </div>
              </div>
              <div className=" flex items-center gap-2 pt-2 ">
                <select className="border-[1.5px]  px-1 text-gray-700 rounded-lg border-gray-200 outline-none py-[6px] w-full " >
                  {tabs.map((tab) => (
                    <option
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab}
                    </option>
                  ))}
                </select>
                <button className="flex items-center lg:space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <FilterIcon />
                  <span className=" hidden lg:inline ">Date filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Order Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={
                        selectedOrders.length === filteredOrders.length &&
                        filteredOrders.length > 0
                      }
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, index) => (
                    <tr
                      key={order.id}
                      className="hover:bg-blue-100 cursor-pointer "
                    >
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4"
                      >
                        <input
                          type="checkbox"
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => handleSelectOrder(order.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {order.id}
                      </td>
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {order.created}
                      </td>
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {order.customer}
                      </td>
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {order.total}
                      </td>
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        <div className="flex items-center space-x-2">
                          <span>{order.profit}</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            {order.profitPercent}
                          </span>
                        </div>
                      </td>
                      <td
                        onClick={() => handleSelectOrder(order.id)}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-gray-400 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50">
                          <MoreIcon />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No orders found for "{activeTab}" status.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderManagement;
