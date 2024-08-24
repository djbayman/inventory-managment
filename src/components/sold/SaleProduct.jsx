import React, { useState } from "react";

import { FaCube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import SoldProductDetails from "./SoldProductDetails";
import SaleComplete from "./SaleComplete";
import SoldProductClients from "./SoldProductClients";
import SaleProgress from "./SaleProgress";

const SaleProduct = () => {
  const [saleStep, setSaleStep] = useState(1);
  const { soldNext } = useContext(InventoryContext);

  return (
    <div className="mx-4">
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">Sale a Products</h1>
        <p className="text-slate-500">add the product to your sale list</p>
      </div>
      <SaleProgress saleStep={saleStep} />
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
