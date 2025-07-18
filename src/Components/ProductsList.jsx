import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import product from "../../public/image.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  EyeOff,
  FilterIcon,
  Funnel,
  Grid3x2,
  Package,
  Rows3,
  Tag,
  Wallet,
} from "lucide-react";
const ProductsList = ({ transactions = [], stockData = [] }) => {
  const [displayMode, setdisplayMode] = useState("line");
  const [stockDetailsIndex, setstockDetailsIndex] = useState(0);
  const SearchIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
  return (
    <div className="w-full bg-gray-50 lg:p-5 pb-18 lg:pb-0 overflow-y-auto h-full">
      <div className="w-full">
        {/* Stock-Out Predictions */}
        <div id="stock" className="bg-white w-full lg:rounded-lg  p-4">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-lg pl-2 font-semibold text-blue-600">
              Stock-Out
            </h2>
            <p className="text-sm font-light text-gray-600 px-2 ">
              {" "}
              {transactions[stockDetailsIndex].date}{" "}
            </p>
          </div>

          {/* Product Icons */}
          {/* <div className="flex items-center pb-4 custom-horizontal-scrollbar overflow-x-auto  gap-8 mb-2">
            <div className="flex flex-col items-center">
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-2">
                <span className="text-white text-xl">⌚</span>
              </div>
              <span className="text-xs whitespace-nowrap text-gray-600">
                Apple Watch
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-2">
                <span className="text-white text-xl">👟</span>
              </div>
              <span className="text-xs whitespace-nowrap text-gray-600">
                Jordan Air
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-2">
                <span className="text-white text-xl">🎧</span>
              </div>
              <span className="text-xs whitespace-nowrap text-gray-600">
                Airpods
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-2">
                <span className="text-white text-xl">🖥️</span>
              </div>
              <span className="text-xs whitespace-nowrap text-gray-600">
                Monitors
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center mb-2">
                <span className="text-gray-600 text-xl">🛏️</span>
              </div>
              <span className="text-xs whitespace-nowrap text-gray-600">
                Medical pillow
              </span>
            </div>
          </div> */}

          {/* Chart */}
          <div className="h-72 relative">
            {stockData.length > 0 ? (
              <ResponsiveContainer
                className=" -translate-x-5 border-none outline-none "
                width="100%"
                height="100%"
              >
                <LineChart
                  data={stockData}
                  margin={{ top: 10, right: 5, left: 0, bottom: 30 }}
                >
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 140]}
                    ticks={[0, 25, 50, 75, 100, 125]}
                  />
                  <ReferenceLine
                    y={50}
                    stroke="#E5E7EB"
                    strokeDasharray="3 3"
                  />
                  <Line
                    type="monotone"
                    dataKey="stock"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                No stock data available
              </div>
            )}
            <div className="absolute bottom-2 left-6 text-xs text-gray-500">
              <span className="font-medium">Current Stock</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full my-5 ">
        <div className="bg-white rounded-lg  border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="px-3 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Product Inventory
            </h2>
            <button
              onClick={() => {
                displayMode === "line"
                  ? setdisplayMode("grid")
                  : setdisplayMode("line");
              }}
              className="text-blue-600  hover:text-blue-700 text-sm font-medium"
            >
              {displayMode === "grid" && (
                <span className="flex gap-1 px-1 items-center">
                  <Rows3 size={17} /> Line
                </span>
              )}
              {displayMode === "line" && (
                <span className="flex gap-1 px-1 items-center">
                  <Grid3x2 size={17} /> Grid
                </span>
              )}
            </button>
          </div>

          {/* Table */}
          <div className={displayMode === "line" ? "overflow-x-auto" : "overflow-x-hidden"} >
            <table className="w-full">
              {displayMode === "line" ? (
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ACTIONS
                  </th> */}
                  </tr>
                </thead>
              ) : (
                <div className="py-4 w-full flex justify-between px-4 ">
                  <div className="relative  ">
                    <input
                      type="text"
                      placeholder="Search by product.."
                      className="pl-10 w-full lg:w-fit pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[1.4px] focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute left-3 top-2.5 text-gray-400">
                      <SearchIcon />
                    </div>
                  </div>
                  <button className="flex text-gray-900 items-center lg:space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <FilterIcon size={15} />
                  <span className="whitespace-nowrap  hidden lg:inline ">Date filter</span>
                </button>
                </div>
              )}
              <tbody
                className={` bg-white  ${
                  displayMode === "line"
                    ? "divide-y divide-gray-200"
                    : "flex flex-wrap gap-2 mx-auto justify-center py-5 "
                } `}
              >
                {transactions.length > 0 ? (
                  transactions.map((transaction, index) => {
                    return displayMode === "line" ? (
                      <ProductLine
                        currentStock={stockDetailsIndex}
                        stockFnc={setstockDetailsIndex}
                        key={index}
                        pr={transaction}
                        index={index}
                      />
                    ) : (
                      <ProductCard
                        activate={index != 3}
                        key={index}
                        index={index}
                        pr={transaction}
                        currentStock={stockDetailsIndex}
                        stockFnc={setstockDetailsIndex}
                      />
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No transactions available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

function ProductLine({ currentStock, index, stockFnc, pr }) {
  function goToStock() {
    stockFnc(index);
    const anchor = document.createElement("a");
    anchor.href = "#stock";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  function ShowProductDetails() {}
  return (
    <tr
      className={`cursor-pointer hover:bg-gray-100 ${
        index == currentStock && "bg-gray-100"
      } `}
    >
      <td onClick={() => goToStock()} className="px-6 w-16   whitespace-nowrap">
        <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-sm font-medium">
          {pr.id}
        </span>
      </td>
      <td
        onClick={() => goToStock()}
        className="pl-6 whitespace-nowrap  min-w-[60%] w-[60%] overflow-x-hidden max-w-[250px] py-4  text-sm text-gray-900"
      >
        {pr.date}
      </td>
      <td
        onClick={() => goToStock()}
        className="px-6 py-4 w-[15%] max-w-[15%] whitespace-nowrap text-sm text-gray-900"
      >
        {pr.quantity}
      </td>
      <td
        onClick={() => goToStock()}
        className="px-6 py-4 w-[15%] max-w-[15%] whitespace-nowrap text-sm text-gray-900"
      >
        {pr.total}
      </td>
      <td className="  whitespace-nowrap">
        <button
          onClick={() => ShowProductDetails()}
          className="text-blue-600 py-4 px-6 hover:underline cursor-pointer hover:text-blue-700 text-sm font-medium"
        >
          Details
        </button>
      </td>
    </tr>
  );
}

function ProductCard({ index, stockFnc, activate, pr }) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    centered: true, // ✅ Center mode

    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  const timer = useRef();

  useEffect(() => {
    if (!slider) return;

    const autoplay = () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 2000); // change every 3s
    };

    autoplay();

    return () => clearInterval(timer.current);
  }, [slider]);

  function goToStock() {
    stockFnc(index);
    const anchor = document.createElement("a");
    anchor.href = "#stock";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  return (
    <div
      className={`min-w-[260px] -translate-x-3 sm:translate-0 scale-[.88] pt-2 relative  h-[530px] w-[300px] max-w-[600px] md:w-[50%] lg:w-[30%] rounded-xl  shadow-lg shadow-gray-100 my-3 sm:scale-95`}
    >
      {!activate && (
        <div className=" w-full h-full z-20 px-3  justify-center bg-white/80 gap-6 absolute flex items-center flex-col ">
          <EyeOff size={40} />
          <p className="text-sm text-gray-700 w-full px-2 text-center ">
            {" "}
            This product is not visible for the clients in your store{" "}
          </p>
          <button className=" py-2 px-5 text-white bg-blue-600 rounded-lg scale-90 ">
            Activate
          </button>
        </div>
      )}

      <div
        ref={sliderRef}
        className=" w-full h-[200px] mt-2 p-5 keen-slider   "
      >
        <div className="keen-slider__slide number-slide1">
          <img
            src={product}
            alt="Slide 1"
            className="w-full -translate-x-4  h-full object-center object-contain"
          />
        </div>
        <div ref={sliderRef} className="keen-slider__slide number-slide1">
          <img
            src={product}
            alt="Slide 1"
            className="w-full h-full -translate-x-4  object-center object-contain"
          />
        </div>
        <div ref={sliderRef} className="keen-slider__slide number-slide1">
          <img
            src={product}
            alt="Slide 1"
            className="w-full h-full -translate-x-4  object-center object-contain"
          />
        </div>
      </div>
      <div className=" w-full px-4 p-2 h-[60%] flex flex-col gap-3 ">
        <h2 className=" text-base font-bold text-gray-950 line-clamp-1 ">
          {" "}
          {pr.date}{" "}
        </h2>
        <p className="line-clamp-3 text-sm text-gray-500 mb-1 ">
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </p>
        <div className=" text-sm text-gray-700 w-full flex items-center gap-2  ">
          {" "}
          <span className="text-gray-950 flex gap-1 items-center font-semibold">
            <Funnel size={14} /> Category
          </span>{" "}
          test{" "}
        </div>
        <div className=" text-sm text-gray-700 w-full flex items-center gap-2  ">
          {" "}
          <span className="text-gray-950 flex gap-1 items-center font-semibold">
            <Tag size={14} /> Brand
          </span>{" "}
          test{" "}
        </div>
        <div className=" text-sm text-gray-700 w-full flex items-center gap-2  ">
          {" "}
          <span className="text-gray-950 flex gap-1 items-center font-semibold">
            <Package size={14} /> Stock
          </span>{" "}
          122{" "}
        </div>
        <div className=" text-sm text-gray-700 w-full flex items-center gap-2  ">
          {" "}
          <span className="text-gray-950 flex gap-1 items-center font-semibold">
            <Wallet size={14} /> Price
          </span>{" "}
          5000 Da{" "}
        </div>
        <button
          onClick={() => goToStock()}
          className="mt-2 cursor-pointer hover:bg-blue-900 transition w-full py-2 rounded-md bg-blue-600 text-white "
        >
          Stock details
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
