import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const ProductsList = () => {
  const stockData = [
    { day: 'Mon', stock: 125 },
    { day: 'Tue', stock: 115 },
    { day: 'Wed', stock: 105 },
    { day: 'Thu', stock: 95 },
    { day: 'Fri', stock: 80 },
    { day: 'Sat', stock: 65 },
    { day: 'Sun', stock: 45 },
  ];

  const productData = [
    { name: 'Apple iPhone 13', sold: 45, price: '200,000 DA', itemCode: 'FXZ-4567' },
    { name: 'Nike Air Jordan', sold: 85, price: '8,000 DA', itemCode: 'FXZ-5426' },
    { name: 'Beats Studio 2', sold: 175, price: '4500 DA', itemCode: 'FXZ-9485' },
    { name: 'Apple Watch Series 7', sold: 235, price: '15,000 DA', itemCode: 'FXZ-5214' },
    { name: 'Amazon Echo Dot', sold: 245, price: '4200 DA', itemCode: 'FXZ-8950' },
    { name: 'PlayStation Console', sold: 38, price: '64,000 DA', itemCode: 'FXZ-7852' },
  ];

  const OptionsIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock-Out Predictions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-blue-600">Stock-Out Predictions</h2>
            <OptionsIcon />
          </div>
          
          {/* Product Icons */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-2">
                <span className="text-white text-xl">⌚</span>
              </div>
              <span className="text-xs text-gray-600">Apple Watch</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-2">
                <span className="text-white text-xl">👟</span>
              </div>
              <span className="text-xs text-gray-600">Jordan Air</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-2">
                <span className="text-white text-xl">🎧</span>
              </div>
              <span className="text-xs text-gray-600">Airpods</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-2">
                <span className="text-white text-xl">🖥️</span>
              </div>
              <span className="text-xs text-gray-600">Monitors</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center mb-2">
                <span className="text-gray-600 text-xl">🛏️</span>
              </div>
              <span className="text-xs text-gray-600">Medical pillow</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-48 relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stockData} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                  domain={[0, 140]}
                  ticks={[0, 25, 50, 75, 100, 125]}
                />
                <ReferenceLine y={50} stroke="#E5E7EB" strokeDasharray="3 3" />
                <Line 
                  type="monotone" 
                  dataKey="stock" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="absolute bottom-2 left-6 text-xs text-gray-500">
              <span className="font-medium">Current Stock</span>
            </div>
          </div>
        </div>

        {/* Wining Products */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-blue-600">Wining Products</h2>
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
            {productData.map((product, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 text-sm">{product.name}</span>
                  <span className="text-xs text-gray-500">Item #{product.itemCode}</span>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-gray-900">{product.sold}</span>
                </div>
                <div className="text-sm font-medium text-gray-900">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;