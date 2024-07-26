import { getDatabase, push, ref, set } from "firebase/database";
import React, { useContext } from "react";
import {
  InventoryContext,
  saleInitialState,
} from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { app } from "../../firebaseConfig";

const SaleComplete = () => {
  const {
    setSaleStep,
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductImg,
    soldProductClientID,
    soldProductClientName,
    soldDate,
    setSoldProductStates,
  } = useContext(InventoryContext);

  const saveSoldData = async () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toUTCString().slice(0, 11);

    const db = getDatabase(app);
    const newDocRef = push(ref(db, "inventory/sales"));
    set(newDocRef, {
      soldProductID,
      soldProductName,
      soldProductQuantity,
      soldProductPrice,
      soldCompanyName,
      soldProductImg,
      soldProductClientID,
      soldProductClientName,
      soldDate: today,
    })
      .then(() => {
        setSaleStep(1);
        setSoldProductStates({ ...saleInitialState });
      })
      .catch((err) => {
        alert("err:", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-40">
      <Link to="/sales">
        <button
          className="px-2 py-1 rounded-md text-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          onClick={saveSoldData}
        >
          Sold Complete
        </button>
      </Link>
    </div>
  );
};

export default SaleComplete;
