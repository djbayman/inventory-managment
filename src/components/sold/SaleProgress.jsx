import React from "react";
import { FaCube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const SaleProgress = ({ saleStep }) => {
  return (
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
  );
};

export default SaleProgress;
