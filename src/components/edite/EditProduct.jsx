import { useContext, useState } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import EditeProductDetails from "./EditeProductDetails";
import EditeSupplierDetails from "./EditeSupplierDetails";
import EditeComplete from "./EditeComplete";
import { useLocation } from "react-router-dom";
import Progress from "../add/Progress";
import SaleProgress from "../sold/SaleProgress";

const EditProduct = () => {
  const [editeStep, setEditeStep] = useState(1);
  const location = useLocation().pathname;
  const { editeNext } = useContext(InventoryContext);

  return (
    <div className="mx-4">
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">Edite Products</h1>
        <p className="text-slate-500">make change in your product.</p>
      </div>
      {location.includes("purchases") ? (
        <Progress editeStep={editeStep} />
      ) : (
        <SaleProgress editeStep={editeStep} />
      )}
      <div className="min-h-40">
        {editeStep === 1 ? (
          <EditeProductDetails />
        ) : editeStep === 2 ? (
          <EditeSupplierDetails />
        ) : editeStep === 3 ? (
          <EditeComplete />
        ) : (
          ""
        )}
      </div>

      <div className="flex items-center justify-between my-6 mx-8">
        <button
          className={
            editeStep === 1
              ? "invisible"
              : "px-4 py-1 bg-slate-300 hover:bg-slate-400 transition-colors font-semibold rounded-md"
          }
          onClick={() => setEditeStep(editeStep - 1)}
        >
          Back
        </button>
        <button
          className={`${
            editeNext
              ? " bg-cyan-600 hover:bg-cyan-700 text-white"
              : " bg-gray-600  text-white cursor-not-allowed"
          } px-4 py-1 font-semibold rounded-md transition-colors ${
            editeStep === 3 ? "hidden" : ""
          }`}
          onClick={() => setEditeStep(editeNext ? editeStep + 1 : editeStep)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
