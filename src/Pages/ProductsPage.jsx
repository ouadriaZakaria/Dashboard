import React from "react";
import ProductsList from "../Components/ProductsList";
import Header from "../Components/Header";

const ProductsPage = () => {
  // Sample stock data - replace with actual data from your API/state management
  const stockData = [
    { day: "Mon", stock: 125 },
    { day: "Tue", stock: 115 },
    { day: "Wed", stock: 105 },
    { day: "Thu", stock: 95 },
    { day: "Fri", stock: 80 },
    { day: "Sat", stock: 65 },
    { day: "Sun", stock: 45 },
  ];

  // Sample product data - replace with actual data from your API/state management
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

  const transactions = [
    { id: '#5089', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5090', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5091', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5092', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5093', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5094', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5095', date: 'rything to show to the admin', total: '34' , quantity : 12 },
    { id: '#5096', date: 'thius is the product name that contain a name and everything to show to the admin thius is the product name that contain a name and everything to show to the admin', total: '34' , quantity : 12 },
  ];

  return (
    <div className=" flex w-full h-dvh flex-col  overflow-hidden ">
      <Header pageName="Products" />
      <ProductsList transactions={transactions} stockData={stockData} productData={productData} />
    </div>
  );
};

export default ProductsPage;
