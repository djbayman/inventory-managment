import { FaCube } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import ProductDetails from "./ProductDetails";
import SupplierDetails from "./SupplierDetails";
import Complete from "./Complete";
import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const AddProduct = () => {
  const { step, setStep } = useContext(InventoryContext);

  return (
    <div className="mx-6">
      <div className="comp-head my-6">
        <h1 className="text-2xl font-bold mb-4">Add Products</h1>
        <p className="text-slate-500">add product in your inventory</p>
      </div>

      <div
        className="progress flex items-center gap-4  mx-auto my-10"
        style={{ width: "95%" }}
      >
        <p className="flex items-center gap-2">
          <span
            className={
              step === 1
                ? "w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <FaCube className="text-2xl text-white" />
          </span>

          <span className=" text-slate-500">Product Details</span>
        </p>
        <div className="w-1/3  bg-slate-200" style={{ height: "2px" }}></div>
        <p className="flex items-center gap-2">
          <span
            className={
              step === 2
                ? "w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <MdPermContactCalendar className="text-2xl text-white" />
          </span>

          <span className=" text-slate-500">Supplier Details</span>
        </p>
        <div className="w-1/3  bg-slate-200" style={{ height: "2px" }}></div>
        <p className="flex items-center gap-2">
          <span
            className={
              step === 3
                ? "w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center transition-all"
                : "hidden"
            }
          >
            <FaCheckCircle className="text-2xl text-white" />
          </span>

          <span className=" text-slate-500">Complete</span>
        </p>
      </div>
      <div className="min-h-52">
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

      <div className="flex items-center justify-between my-10 mx-8">
        <button
          className={
            step === 1
              ? "invisible"
              : "px-4 py-1 bg-slate-300 hover:bg-slate-400 transition-colors text-xl rounded-md"
          }
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        <button
          className={
            step === 3
              ? "hidden"
              : "px-4 py-1 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white text-xl rounded-md"
          }
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
