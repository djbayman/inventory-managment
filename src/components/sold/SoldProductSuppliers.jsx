import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const SoldProductSuppliers = () => {
  const {
    soldProductSupplierID,
    soldProductSupplierName,
    setSoldProductStates,
  } = useContext(InventoryContext);
  return (
    <div>
      <h2 className="text-2xl text-slate-500 my-5 font-bold">
        Supplier Details
      </h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter Supplier ID</label>
        <input
          type="text"
          placeholder="Enter Supplier ID"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold"
          value={soldProductSupplierID}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductSupplierID: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Supplier Name</label>
        <input
          type="text"
          placeholder="Enter Supplier Name"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold"
          value={soldProductSupplierName}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductSupplierName: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
};

export default SoldProductSuppliers;
