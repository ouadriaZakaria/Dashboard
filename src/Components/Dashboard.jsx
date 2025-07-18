import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import Header from "./Header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = ({ dashboardData , productData = [] }) => {
  // Default chart options
  const revenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9CA3AF",
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false,
      },
    },
  };

  const smallChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const OptionsIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );

  // If no data provided, show loading or empty state
  if (!dashboardData) {
    return (
      <main className="w-full h-full  p-3 ">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard data...</p>
          </div>
        </div>
      </main>
    );
  }

  const {
    revenue = {},
    orders = {},
    profit = {},
    sessions = {},
  } = dashboardData;

  return (
    <main className="w-full pb-24 lg:pb-3 bg-gray-50 p-2 md:p-5 overflow-y-auto h-full ">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Total Revenue Card */}
        <div className="w-full lg:w-[65%] relative h-[440px] bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Total Revenue
              </h3>
              <p className="text-xl font-bold text-gray-900 ">
                {revenue.total || "0"} DA
              </p>
              <span className="inline-flex absolute top-2 right-3 items-center px-2.5 py-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                {revenue.period || "THIS YEAR"}
              </span>
            </div>
          </div>
          {revenue.chartData && (
            <div className="h-[300px]">
              <Bar data={revenue.chartData} options={revenueOptions} />
            </div>
          )}
        </div>

        {/* Winning Products */}
        <div className="bg-white h-[440px] overflow-y-auto customScrollBar  lg:rounded-lg shadow-sm p-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-blue-600">
              Winning Products
            </h2>
            <OptionsIcon />
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 text-sm font-medium text-gray-700">
            <div>Product</div>
            <div>Sold/week</div>
            <div>Price</div>
          </div>

          {/* Product List */}
          <div className="space-y-4">
            {productData.length > 0 ? (
              productData.map((product, index) => (
                <div
                  key={index}
                  className="grid sm:grid-cols-3 bg-gray-50 p-2 rounded-lg  gap-4 items-center"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900 text-sm">
                      {product.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      Item #{product.itemCode}
                    </span>
                  </div>
                  <div className="pl-2">
                    <span className="text-base  font-bold text-gray-900">
                      {product.sold}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {product.price}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                No product data available
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" w-full flex-col lg:flex-row py-4 pt-6 flex gap-4 ">
        {/* Total Orders */}
        <div className="bg-white w-full rounded-xl lg:h-[230px] shadow-sm border border-gray-200 p-2 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                Total Orders
              </h3>
              <p className="text-xs text-gray-400">
                {orders.period || "Last 7 days"}
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {orders.total || "0"}
              </p>
              {orders.change && (
                <p
                  className={`text-sm mt-1 ${
                    orders.change.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {orders.change.isPositive ? "↗" : "↓"}{" "}
                  {orders.change.percentage}% vs {orders.change.comparison}
                </p>
              )}
            </div>
            {orders.chartData && (
              <div className="h-16 w-full ">
                <Line data={orders.chartData} options={smallChartOptions} />
              </div>
            )}
          </div>
        </div>
        {/* Total Profit */}
        <div className="bg-white rounded-xl w-full lg:h-[230px] shadow-sm border border-gray-200 p-2 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-600">
                Total Profit
              </h3>
              <p className="text-xs text-gray-400">
                {profit.period || "Last 7 days"}
              </p>
            </div>
          </div>
          <div className="flex flex-col   justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {profit.total || "0"} DA
              </p>
              {profit.change && (
                <p
                  className={`text-sm  mt-1 ${
                    profit.change.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {profit.change.isPositive ? "↗" : "↓"}{" "}
                  {profit.change.percentage}% vs {profit.change.comparison}
                </p>
              )}
            </div>
            {profit.chartData && (
              <div className="h-18 w-full ">
                <Line data={profit.chartData} options={smallChartOptions} />
              </div>
            )}
          </div>
        </div>
        {/* Sessions Card */}
        <div className="bg-white w-full rounded-xl lg:h-[230px] shadow-sm border border-gray-200 p-2 lg:p-6">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-600">Sessions</h3>
            <p className="text-xs text-gray-400">
              {sessions.period || "Last 7 days"}
            </p>
          </div>
          <div className="flex flex-col pb-2  gap-3 justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {sessions.total || "0"}
              </p>
              {sessions.change && (
                <p
                  className={`text-sm mt-1 ${
                    sessions.change.isPositive
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {sessions.change.isPositive ? "↗" : "↓"}{" "}
                  {sessions.change.percentage}% vs {sessions.change.comparison}
                </p>
              )}
            </div>
            {sessions.chartData && (
              <div className="h-18  w-full ">
                <Line data={sessions.chartData} options={smallChartOptions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
