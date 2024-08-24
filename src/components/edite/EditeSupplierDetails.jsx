import { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import { useLocation } from "react-router-dom";

const EditeSupplierDetails = () => {
  const location = useLocation().pathname;
  const {
    setEditeStates,
    editeSupplierID,
    editeSupplierName,
    editeSupplierEmail,
    editeSupplierPhone,
    setEditeNext,
  } = useContext(InventoryContext);

  useEffect(() => {
    if (
      editeSupplierID &&
      editeSupplierName &&
      editeSupplierEmail &&
      editeSupplierPhone
    ) {
      setEditeNext(true);
    } else {
      setEditeNext(false);
    }
  }, [
    editeSupplierID,
    editeSupplierName,
    editeSupplierEmail,
    editeSupplierPhone,
    setEditeNext,
  ]);

  return (
    <div>
      <h2 className="text-xl text-slate-500 my-5 font-bold">
        Supplier Details
      </h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">
          {location.includes("purchases")
            ? "Enter Supplier ID"
            : "Enter Client ID"}
        </label>
        <input
          type="text"
          placeholder={
            location.includes("purchases")
              ? "Enter Supplier ID"
              : "Enter Client ID"
          }
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierID}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierID: e.target.value,
            }))
          }
        />
        <label className="hidden">
          {location.includes("purchases")
            ? "Enter Supplier Name"
            : "Enter Client Name"}
        </label>
        <input
          type="text"
          placeholder={
            location.includes("purchases")
              ? "Enter Supplier Name"
              : "Enter Client Name"
          }
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierName}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierName: e.target.value,
            }))
          }
        />
        <label className="hidden">
          {location.includes("purchases")
            ? "Enter Supplier Email"
            : "Enter Client Emial"}
        </label>
        <input
          type="text"
          placeholder={
            location.includes("purchases")
              ? "Enter Supplier Email"
              : "Enter Client Emial"
          }
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierEmail}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierEmail: e.target.value,
            }))
          }
        />
        <label className="hidden">
          {location.includes("purchases")
            ? "Enter Supplier Phone"
            : "Enter Client Phone"}
        </label>
        <input
          type="text"
          placeholder={
            location.includes("purchases")
              ? "Enter Supplier Phone"
              : "Enter Client Phone"
          }
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierPhone}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierPhone: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
};

export default EditeSupplierDetails;
