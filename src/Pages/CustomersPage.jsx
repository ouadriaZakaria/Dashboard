import React from "react";
import Customers from "../Components/Customers";
import Header from "../Components/Header";

const CustomersPage = () => {
  const genderData = [
    { name: "Men", value: 63 },
    { name: "Women", value: 37 },
  ];

  const circularData = [
    { percentage: 85, color: "#8b5cf6", label: "Current Customers" },
    { percentage: 66, color: "#f59e0b", label: "New Customers" },
    { percentage: 90, color: "#f97316", label: "Target Customers" },
  ];

  const customers = Array.from({ length: 3 }, () => ({
    name: "Hadjadji Mounir",
    email: "hadjadi2004@gmail.com",
    phone: "(213) 555-0124",
    gender: "Male",
    dob: "29 May 2004",
    memberSince: "3 March, 2023",
    address: "EL DJELFA, ALGERIA",
    totalOrders: 24,
    completed: 11,
    cancelled: 13,
  }));

  return (
    <div className=" flex w-full h-dvh flex-col  overflow-hidden ">
      <Header pageName="Costumer" />
      <Customers
        genderData={genderData}
        circularData={circularData}
        customers={customers}
      />
    </div>
  );
};

export default CustomersPage;
