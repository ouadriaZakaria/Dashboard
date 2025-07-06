import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from './Header'; // Import Header component

const CircularProgress = ({ percentage, color, label }) => {
  const data = [
    { name: 'completed', value: percentage, fill: color },
    { name: 'remaining', value: 100 - percentage, fill: '#e5e7eb' }
  ];

  const renderCustomizedLabel = ({ cx, cy, value }) => {
    if (value === percentage) {
      return (
        <text x={cx} y={cy} fill={color} textAnchor="middle" dominantBaseline="central" className="font-bold text-lg">
          {`${value}%`}
        </text>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={40}
              innerRadius={30}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs font-medium text-gray-500 text-center">{label}</p>
    </div>
  );
};

const GenderChart = ({ data, title, subtitle, chartType }) => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data || []);
    }, 300);
    return () => clearTimeout(timer);
  }, [data]);

  const filteredData = animatedData.filter(item => item.name.toLowerCase() === chartType.toLowerCase());

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-6">{subtitle}</p>
      
      <div className="space-y-4">
        {filteredData.map((item, index) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">{item.name}</span>
              <span className="text-sm font-semibold text-gray-800">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                  item.name === 'Men' ? 'bg-red-400' : 'bg-yellow-400'
                }`}
                style={{ width: `${item.value}%`, transitionDelay: `${index * 200}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomerCard = ({ customer, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200 * index);
    return () => clearTimeout(timer);
  }, [index]);

  if (!customer) return null;

  return (
    <div className={`bg-white rounded-lg p-10 shadow-sm border border-gray-100 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex items-start space-x-6 pr-6 border-r border-gray-100">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 border-2 border-purple-200">
            <div className="w-12 h-12 bg-purple-500 rounded-full" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{customer.name}</h3>
            <p className="text-base text-gray-500">{customer.email}</p>
          </div>
        </div>

        <div className="px-6 border-r border-gray-100">
          <h4 className="text-sm font-medium text-gray-400 mb-6 tracking-wide">PERSONAL INFORMATION</h4>
          <div className="space-y-4">
            <div className="flex justify-between text-base">
              <span className="text-gray-500">Contact Number</span>
              <span className="text-gray-800 font-medium">{customer.phone}</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-gray-500">Gender</span>
              <span className="text-gray-800 font-medium">{customer.gender}</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-gray-500">Date of Birth</span>
              <span className="text-gray-800 font-medium">{customer.dob}</span>
            </div>
            <div className="flex justify-between text-base">
              <span className="text-gray-500">Member Since</span>
              <span className="text-gray-800 font-medium">{customer.memberSince}</span>
            </div>
          </div>
        </div>

        <div className="pl-6">
          <h4 className="text-sm font-medium text-gray-400 mb-6 tracking-wide">SHIPPING ADDRESS</h4>
          <p className="text-base text-gray-800 font-medium mb-8">{customer.address}</p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-800">{customer.totalOrders}</div>
              <div className="text-sm text-gray-400">Total Order</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800">{customer.completed}</div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800">{customer.cancelled}</div>
              <div className="text-sm text-gray-400">Cancelled</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Customers = ({ genderData = [], circularData = [], customers = [] }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header pageName="Customers" />
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <GenderChart 
              data={genderData} 
              title="Gender stats" 
              subtitle="Information about store visits"
              chartType="men"
            />
            <GenderChart 
              data={genderData} 
              title="Gender stats" 
              subtitle="Information about store visits"
              chartType="women"
            />
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                <div className="flex justify-center items-center h-full">
                  <div className="grid grid-cols-3 gap-8">
                    {circularData.map((item, index) => (
                      <CircularProgress
                        key={index}
                        percentage={item.percentage}
                        color={item.color}
                        label={item.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {customers.map((customer, index) => (
              <CustomerCard key={index} customer={customer} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;