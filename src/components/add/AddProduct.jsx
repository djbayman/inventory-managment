import { FaCube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import ProductDetails from "./ProductDetails";
import SupplierDetails from "./SupplierDetails";
import Complete from "./Complete";
import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const AddProduct = () => {
  const [step, setStep] = useState(1);
  const { next } = useContext(InventoryContext);

  return (
    <div className="mx-4">
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">Add Products</h1>
        <p className="text-slate-500">add product to your inventory</p>
      </div>
      <div className="progress flex items-center gap-2  my-6 min-h-10">
        <p className="flex items-center gap-2 w-56 justify-center">
          <span
            className={
              step === 1
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
              step === 2
                ? "w-7 h-7 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <MdPermContactCalendar className=" text-white" />
          </span>

          <span className=" text-slate-500 text-sm">Supplier Details</span>
        </p>
        <div className="w-2/4  bg-slate-200" style={{ height: "2px" }}></div>
        <p className="flex items-center gap-2 w-56 justify-center">
          <span
            className={
              step === 3
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
        {step === 1 ? (
          <ProductDetails />
        ) : step === 2 ? (
          <SupplierDetails />
        ) : step === 3 ? (
          <Complete />
        ) : (
          ""
        )}
      </div>

      <div className="flex items-center justify-between my-6 mx-8">
        <button
          className={
            step === 1
              ? "invisible"
              : "px-4 py-1 bg-slate-300 hover:bg-slate-400 transition-colors font-semibold rounded-md"
          }
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        <button
          className={`${
            next
              ? " bg-cyan-600 hover:bg-cyan-700 text-white"
              : " bg-gray-600  text-white cursor-not-allowed"
          } px-4 py-1 font-semibold rounded-md transition-colors ${
            step === 3 ? "hidden" : ""
          }`}
          onClick={() => setStep(next ? step + 1 : step)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
