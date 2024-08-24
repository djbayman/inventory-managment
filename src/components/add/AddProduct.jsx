import { FaCube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import ProductDetails from "./ProductDetails";
import SupplierDetails from "./SupplierDetails";
import Complete from "./Complete";
import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import Progress from "./Progress";

const AddProduct = () => {
  const [step, setStep] = useState(1);
  const { next } = useContext(InventoryContext);

  return (
    <div className="mx-4">
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">Add Products</h1>
        <p className="text-slate-500">add product to your inventory</p>
      </div>
      <Progress step={step} />
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
