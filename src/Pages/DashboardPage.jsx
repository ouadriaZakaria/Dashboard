import React from 'react';
import Dashboard from '../Components/Dashboard';

// Sample data for dashboard - replace with your actual data fetching logic
const dashboardData = {
  revenue: {
    total: '66,000',
    period: 'THIS YEAR',
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [15000, 25000, 35000, 20000, 45000, 30000, 35000, 25000, 32000, 18000, 22000, 20000],
          backgroundColor: '#3B82F6',
          borderRadius: 4,
          barThickness: 20,
        }
      ]
    }
  },
  orders: {
    total: '400',
    period: 'Last 7 days',
    change: {
      percentage: 6,
      isPositive: true,
      comparison: 'last 7 days'
    },
    chartData: {
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
    }
  },
  profit: {
    total: '90K',
    period: 'Last 7 days',
    change: {
      percentage: 52,
      isPositive: true,
      comparison: 'last 7 days'
    },
    chartData: {
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
    }
  },
  sessions: {
    total: '16.5K',
    period: 'Last 7 days',
    change: {
      percentage: 90,
      isPositive: false,
      comparison: 'last 7 days'
    },
    chartData: {
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
    }
  }
};

const DashboardPage = () => {
  return <Dashboard dashboardData={dashboardData} />;
};

export default DashboardPage;