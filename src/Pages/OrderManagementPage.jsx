import React from 'react';
import OrderManagement from '../Components/OrderManagement';
import Header from '../Components/Header';

// Sample orders data - replace with your actual data fetching logic
const sampleOrders = [
  {
    id: '#6548',
    created: '2 min ago',
    customer: 'Benmansour Imad',
    total: '4700.DA',
    profit: '2500.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6549',
    created: '5 min ago',
    customer: 'Amrani Haithem',
    total: '3200.DA',
    profit: '1800.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6550',
    created: '8 min ago',
    customer: 'Sayah Abdelillah',
    total: '2800.DA',
    profit: '1500.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6551',
    created: '12 min ago',
    customer: 'Chiati Mouad',
    total: '3400.DA',
    profit: '1200.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6552',
    created: '15 min ago',
    customer: 'Bendebiche Sadjed',
    total: '2800.DA',
    profit: '1500.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6553',
    created: '18 min ago',
    customer: 'Moumine Rayane',
    total: '2800.DA',
    profit: '1500.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6554',
    created: '20 min ago',
    customer: 'Benharat Walid',
    total: '2800.DA',
    profit: '1500.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6555',
    created: '25 min ago',
    customer: 'Meziani Imad',
    total: '2800.DA',
    profit: '1500.DA',
    profitPercent: '16%',
    status: 'Pending'
  },
  {
    id: '#6556',
    created: '1 hour ago',
    customer: 'Ahmed Bensalem',
    total: '3500.DA',
    profit: '2000.DA',
    profitPercent: '16%',
    status: 'Confirmed'
  },
  {
    id: '#6557',
    created: '2 hours ago',
    customer: 'Fatima Zohra',
    total: '4200.DA',
    profit: '2500.DA',
    profitPercent: '16%',
    status: 'Processing'
  },
  {
    id: '#6558',
    created: '3 hours ago',
    customer: 'Karim Benali',
    total: '3800.DA',
    profit: '2200.DA',
    profitPercent: '16%',
    status: 'Picked'
  },
  {
    id: '#6559',
    created: '4 hours ago',
    customer: 'Nadia Slimani',
    total: '2900.DA',
    profit: '1600.DA',
    profitPercent: '16%',
    status: 'Shipped'
  },
  {
    id: '#6560',
    created: '5 hours ago',
    customer: 'Omar Khaled',
    total: '5200.DA',
    profit: '3000.DA',
    profitPercent: '16%',
    status: 'Delivered'
  },
  {
    id: '#6561',
    created: '6 hours ago',
    customer: 'Leila Mahrez',
    total: '1800.DA',
    profit: '900.DA',
    profitPercent: '16%',
    status: 'Cancelled'
  }
];

const OrderManagementPage = () => {
  // In a real application, you would fetch this data from an API
  // const { data: orders, loading, error } = useOrders();
  
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error loading orders</div>;

  return  <div className=" flex w-full h-dvh flex-col  overflow-hidden ">
      <Header pageName="Orders" />
      <OrderManagement orders={sampleOrders} />
    </div> ;
};

export default OrderManagementPage;