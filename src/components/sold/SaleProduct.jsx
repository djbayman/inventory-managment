import React, { useState } from "react";

import { FaCube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import SoldProductDetails from "./SoldProductDetails";
import SaleComplete from "./SaleComplete";
import SoldProductClients from "./SoldProductClients";

const SaleProduct = () => {
  const [saleStep, setSaleStep] = useState(1);
  const { soldNext } = useContext(InventoryContext);

  return (
    <div className="mx-4">
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">Sale a Products</h1>
        <p className="text-slate-500">add the product to your sale list</p>
      </div>

      <div className="progress flex items-center gap-2  my-6 min-h-10">
        <p className="flex items-center gap-2 w-56 justify-center">
          <span
            className={
              saleStep === 1
                ? "w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <FaCube className=" text-white" />
          </span>

          <span className=" text-slate-500 text-sm">Product Details</span>
        </p>
        <div className="w-2/4 bg-slate-200" style={{ height: "2px" }}></div>
        <p className="flex items-center gap-2 w-56 justify-center">
          <span
            className={
              saleStep === 2
                ? "w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <MdPermContactCalendar className="text-2xl text-white" />
          </span>

          <span className=" text-slate-500 text-sm">Client Details</span>
        </p>
        <div className="w-2/4 bg-slate-200" style={{ height: "2px" }}></div>
        <p className="flex items-center gap-2 w-56 justify-center">
          <span
            className={
              saleStep === 3
                ? "w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <FaCheckCircle className=" text-white" />
          </span>
          <span className=" text-slate-500 text-sm">Complete</span>
        </p>
      </div>
      <div className="min-h-40">
        {saleStep === 1 ? (
          <SoldProductDetails />
        ) : saleStep === 2 ? (
          <SoldProductClients />
        ) : saleStep === 3 ? (
          <SaleComplete />
        ) : (
          ""
        )}
      </div>

      <div className="flex items-center justify-between my-6 mx-8">
        <button
          className={
            saleStep === 1
              ? "invisible"
              : "px-4 py-1 bg-slate-300 hover:bg-slate-400 transition-colors font-semibold rounded-md"
          }
          onClick={() => setSaleStep(saleStep - 1)}
        >
          Back
        </button>
        <button
          className={`${
            soldNext
              ? " bg-cyan-600 hover:bg-cyan-700 text-white"
              : " bg-gray-600  text-white cursor-not-allowed"
          } px-4 py-1 font-semibold rounded-md transition-colors ${
            saleStep === 3 ? "hidden" : ""
          }`}
          onClick={() => setSaleStep(soldNext ? saleStep + 1 : saleStep)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SaleProduct;
