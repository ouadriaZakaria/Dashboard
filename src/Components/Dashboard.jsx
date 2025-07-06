import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
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
  Filler
} from 'chart.js';
import Header from './Header';

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

const Dashboard = ({ dashboardData }) => {
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
          color: '#9CA3AF',
          font: {
            size: 12,
          }
        }
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

  // If no data provided, show loading or empty state
  if (!dashboardData) {
    return (
      <div className="flex-1 flex flex-col">
        <Header pageName="Dashboard" />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading dashboard data...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const {
    revenue = {},
    orders = {},
    profit = {},
    sessions = {}
  } = dashboardData;

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <Header pageName="Dashboard" />

      {/* Dashboard Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Total Revenue Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {revenue.total || '0'} DA
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                  {revenue.period || 'THIS YEAR'}
                </span>
              </div>
            </div>
            {revenue.chartData && (
              <div className="h-64">
                <Bar data={revenue.chartData} options={revenueOptions} />
              </div>
            )}
          </div>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {/* Total Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Total Orders</h3>
                  <p className="text-xs text-gray-400">{orders.period || 'Last 7 days'}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">{orders.total || '0'}</p>
                  {orders.change && (
                    <p className={`text-sm mt-1 ${orders.change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {orders.change.isPositive ? '↗' : '↓'} {orders.change.percentage}% vs {orders.change.comparison}
                    </p>
                  )}
                </div>
                {orders.chartData && (
                  <div className="h-16 w-24">
                    <Line data={orders.chartData} options={smallChartOptions} />
                  </div>
                )}
              </div>
            </div>

            {/* Total Profit */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Total Profit</h3>
                  <p className="text-xs text-gray-400">{profit.period || 'Last 7 days'}</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">{profit.total || '0'} DA</p>
                  {profit.change && (
                    <p className={`text-sm mt-1 ${profit.change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {profit.change.isPositive ? '↗' : '↓'} {profit.change.percentage}% vs {profit.change.comparison}
                    </p>
                  )}
                </div>
                {profit.chartData && (
                  <div className="h-16 w-24">
                    <Line data={profit.chartData} options={smallChartOptions} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Card */}
        <div className="mt-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600">Sessions</h3>
              <p className="text-xs text-gray-400">{sessions.period || 'Last 7 days'}</p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{sessions.total || '0'}</p>
                {sessions.change && (
                  <p className={`text-sm mt-1 ${sessions.change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {sessions.change.isPositive ? '↗' : '↓'} {sessions.change.percentage}% vs {sessions.change.comparison}
                  </p>
                )}
              </div>
              {sessions.chartData && (
                <div className="h-16 w-32">
                  <Line data={sessions.chartData} options={smallChartOptions} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;