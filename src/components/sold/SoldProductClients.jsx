import { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const SoldProductClients = () => {
  const {
    soldProductClientID,
    soldProductClientName,
    setSoldProductStates,
    soldProductClientEmail,
    soldProductClientPhone,
    setSoldNext,
  } = useContext(InventoryContext);

  useEffect(() => {
    if (
      soldProductClientID &&
      soldProductClientName &&
      soldProductClientEmail &&
      soldProductClientPhone
    ) {
      setSoldNext(true);
    } else {
      setSoldNext(false);
    }
  }, [
    soldProductClientID,
    soldProductClientName,
    soldProductClientPhone,
    soldProductClientEmail,
    setSoldNext,
  ]);

  return (
    <div>
      <h2 className="text-xl text-slate-500 my-5 font-bold">Client Details</h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter Client ID</label>
        <input
          type="text"
          placeholder="Enter Client ID"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductClientID}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductClientID: e.target.value,
            }))
          }
          maxLength="7"
        />
        <label className="hidden">Enter Clinet Name</label>
        <input
          type="text"
          placeholder="Enter Client Name"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductClientName}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductClientName: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Clinet Email</label>
        <input
          type="text"
          placeholder="Enter Client Email"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductClientEmail}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductClientEmail: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter Clinet Phone Number</label>
        <input
          type="text"
          placeholder="Enter Client Phone Number"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductClientPhone}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductClientPhone: e.target.value,
            }))
          }
        />
      </form>
    </div>
  );
};

export default SoldProductClients;
