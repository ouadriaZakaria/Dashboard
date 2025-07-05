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
import Sidebar from './Sidebar';
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

const Dashboard = () => {
  // Revenue bar chart data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [15000, 25000, 35000, 20000, 45000, 30000, 35000, 25000, 32000, 18000, 22000, 20000],
        backgroundColor: '#3B82F6',
        borderRadius: 4,
        barThickness: 20,
      }
    ]
  };

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

  // Orders line chart data
  const ordersData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        data: [85, 78, 82, 88, 92, 95, 97],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  // Profit line chart data
  const profitData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        data: [45000, 42000, 46000, 48000, 49000, 50000, 50000],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  // Sessions line chart data
  const sessionsData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        data: [18000, 16000, 15000, 14000, 15500, 17000, 16500],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      }
    ]
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

  return (
    <div className="min-h-screen bg-gray-50 flex">


      {/* Main Content */}
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
                  <p className="text-3xl font-bold text-gray-900 mt-2">66 000 DA</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                    THIS YEAR
                  </span>
                </div>
              </div>
              <div className="h-64">
                <Bar data={revenueData} options={revenueOptions} />
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="space-y-6">
              {/* Total Orders */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Orders</h3>
                    <p className="text-xs text-gray-400">Last 7 days</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">97</p>
                    <p className="text-sm text-green-600 mt-1">
                      ↗ 6% vs last 7 days
                    </p>
                  </div>
                  <div className="h-16 w-24">
                    <Line data={ordersData} options={smallChartOptions} />
                  </div>
                </div>
              </div>

              {/* Total Profit */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600">Total Profit</h3>
                    <p className="text-xs text-gray-400">Last 7 days</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">50K DA</p>
                    <p className="text-sm text-green-600 mt-1">
                      ↗ 12% vs last 7 days
                    </p>
                  </div>
                  <div className="h-16 w-24">
                    <Line data={profitData} options={smallChartOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sessions Card */}
          <div className="mt-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-md">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-600">Sessions</h3>
                <p className="text-xs text-gray-400">Last 7 days</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">16.5K</p>
                  <p className="text-sm text-red-600 mt-1">
                    ↓ 3% vs last 7 days
                  </p>
                </div>
                <div className="h-16 w-32">
                  <Line data={sessionsData} options={smallChartOptions} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;