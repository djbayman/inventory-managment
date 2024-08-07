import { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const SupplierDetails = () => {
  const {
    supplierID,
    supplierName,
    supplierEmail,
    supplierPhone,
    setStates,
    setNext,
  } = useContext(InventoryContext);
  useEffect(() => {
    if (supplierID && supplierName && supplierEmail && supplierPhone) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [supplierID, supplierName, supplierEmail, supplierPhone, setNext]);

  return (
    <div>
      <h2 className="text-xl text-slate-500 my-5 font-bold">
        Supplier Details
      </h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter Supplier ID</label>
        <input
          type="text"
          placeholder="Enter Supplier ID"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={supplierID}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              supplierID: e.target.value,
            }))
          }
          maxLength="7"
        />
        <label className="hidden">Enter Supplier Name</label>
        <input
          type="text"
          placeholder="Enter Supplier Name"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={supplierName}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              supplierName: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Supplier Email</label>
        <input
          type="email"
          placeholder="Enter Supplier Email"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={supplierEmail}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              supplierEmail: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Supplier Phone Number</label>
        <input
          type="text"
          placeholder="Enter Supplier Phone Number"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={supplierPhone}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              supplierPhone: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
};

export default SupplierDetails;
