import React from "react";

function AddProductForm() {
  return (
    <div className="p-6 w-full h-full ">
      <div className="flex flex-col p-5 w-full h-full bg-white rounded-lg ">
        <h2 className=" px-1 font-medium text-blue-600 pb-3 text-lg  ">
          Add product form
        </h2>
        <div className="overflow-y-auto w-full h-full ">
          <div className="py-2 flex-col md:flex-row w-full flex gap-3 items-center  ">
            <input
              type="text"
              className="w-full input py-2 outline-none rounded-lg px-3 border-[1.8px] border-gray-400 focus:border-blue-600 "
              placeholder="Product title"
            />
            <input
              type="number"
              className=" w-full md:w-[35%] input py-2 outline-none rounded-lg px-3 border-[1.8px] border-gray-400 focus:border-blue-600 "
              placeholder="Product price -- DZD"
            />
          </div>
          <div className="py-2 flex-col md:flex-row w-full flex gap-3 items-center  ">
            <textarea
              className="w-full min-h-22 input py-2 outline-none rounded-lg px-3 border-[1.8px] border-gray-400 focus:border-blue-600 "
              placeholder="Product description"
            />
          </div>
          <div className="py-2 flex-col md:flex-row w-full flex gap-3 items-center  ">
            <input
              type="text"
              className=" w-full md:w-[50%] input py-2 outline-none rounded-lg px-3 border-[1.8px] border-gray-400 focus:border-blue-600 "
              placeholder="Brand name"
            />
            <select
              type="text"
              className=" w-full md:w-[50%] input py-2 outline-none rounded-lg px-3 border-[1.8px] border-gray-400 focus:border-blue-600 "
            >
              <option>-- chose a category --</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>
        </div>
        <div className=" w-full  flex items-center justify-between px-6 ">
          <button className=" py-2 px-6 rounded-md bg-gray-500 cursor-pointer text-white  ">
            Reset
          </button>

          <button className=" py-2 px-6 rounded-md bg-blue-600 cursor-pointer text-white  ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
