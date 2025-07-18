import React from "react";
import Dashboard from "../Components/Dashboard";
import Header from "../Components/Header";

// Sample data for dashboard - replace with your actual data fetching logic
const dashboardData = {
  revenue: {
    total: "66,000",
    period: "THIS YEAR",
    chartData: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [
            15000, 25000, 35000, 20000, 45000, 30000, 35000, 25000, 32000,
            18000, 22000, 20000,
          ],
          backgroundColor: "#3B82F6",
          borderRadius: 4,
          barThickness: 20,
        },
      ],
    },
  },
  orders: {
    total: "400",
    period: "Last 7 days",
    change: {
      percentage: 6,
      isPositive: true,
      comparison: "last 7 days",
    },
    chartData: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          data: [85, 78, 82, 88, 92, 95, 97],
          borderColor: "#10B981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
  },
  profit: {
    total: "90K",
    period: "Last 7 days",
    change: {
      percentage: 52,
      isPositive: true,
      comparison: "last 7 days",
    },
    chartData: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          data: [45000, 42000, 46000, 48000, 49000, 50000, 50000],
          borderColor: "#10B981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
  },
  sessions: {
    total: "16.5K",
    period: "Last 7 days",
    change: {
      percentage: 90,
      isPositive: false,
      comparison: "last 7 days",
    },
    chartData: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          data: [18000, 16000, 15000, 14000, 15500, 17000, 16500],
          borderColor: "#EF4444",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
  },
};

const DashboardPage = () => {
  const productData = [
    {
      name: "Apple iPhone 13",
      sold: 45,
      price: "200,000 DA",
      itemCode: "FXZ-4567",
    },
    {
      name: "Nike Air Jordan",
      sold: 85,
      price: "8,000 DA",
      itemCode: "FXZ-5426",
    },
    {
      name: "Beats Studio 2",
      sold: 175,
      price: "4500 DA",
      itemCode: "FXZ-9485",
    },
    {
      name: "Apple Watch Series 7",
      sold: 235,
      price: "15,000 DA",
      itemCode: "FXZ-5214",
    },
    {
      name: "Amazon Echo Dot",
      sold: 245,
      price: "4200 DA",
      itemCode: "FXZ-8950",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
    {
      name: "PlayStation Console",
      sold: 38,
      price: "64,000 DA",
      itemCode: "FXZ-7852",
    },
  ];
  return (
    <div className=" flex w-full h-dvh flex-col  overflow-hidden ">
      <Header pageName="Dashboard" />
      <Dashboard productData={productData} dashboardData={dashboardData} />
    </div>
  );
};

export default DashboardPage;
