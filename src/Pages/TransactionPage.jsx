import React from 'react';
import Transaction from '../Components/Transaction';
import Header from '../Components/Header';

const TransactionPage = () => {
  const transactions = [
    { id: '#5089', date: '31 March 2023', total: '25,000.00 DA' },
    { id: '#5090', date: '30 March 2023', total: '28,000.00 DA' },
    { id: '#5091', date: '29 March 2023', total: '15,000.00 DA' },
    { id: '#5092', date: '28 March 2023', total: '35,000.00 DA' },
    { id: '#5093', date: '27 March 2023', total: '27,000.00 DA' },
    { id: '#5094', date: '26 March 2023', total: '45,000.00 DA' },
    { id: '#5095', date: '25 March 2023', total: '32,000.00 DA' },
    { id: '#5096', date: '24 March 2023', total: '18,000.00 DA' },
  ];

  return (
    
     <div className=" flex w-full h-dvh flex-col  overflow-hidden ">
      <Header pageName="Dashboard" />
      <Transaction transactions={transactions} />
    </div>
  );
};

export default TransactionPage;