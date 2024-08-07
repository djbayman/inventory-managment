import { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const EditeSupplierDetails = () => {
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
        <label className="hidden">Enter Supplier ID</label>
        <input
          type="text"
          placeholder="Enter Supplier ID"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierID}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierID: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Supplier Name</label>
        <input
          type="text"
          placeholder="Enter Supplier Name"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierName}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierName: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Supplier Email</label>
        <input
          type="text"
          placeholder="Enter Supplier Email"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeSupplierEmail}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeSupplierEmail: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Supplier phone</label>
        <input
          type="text"
          placeholder="Enter Supplier Phone"
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
