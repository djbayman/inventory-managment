import React, { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import { getDatabase, push, ref, set } from "firebase/database";
import { app } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { initialState } from "../../context/GlobalContext";

const Complete = () => {
  const {
    setStep,
    productID,
    productName,
    productQuantity,
    productPrice,
    companyName,
    supplierID,
    supplierName,
    date,
    setStates,
  } = useContext(InventoryContext);

  const saveData = async () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toUTCString().slice(0, 11);

    const db = getDatabase(app);
    const newDocRef = push(ref(db, "inventory/purchases"));
    set(newDocRef, {
      productID,
      productName,
      productPrice,
      productQuantity,
      companyName,
      supplierID,
      supplierName,
      date: today,
    })
      .then(() => {
        setStep(1);
        setStates({ ...initialState });
      })
      .catch((err) => {
        alert("err:", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-40">
      <Link to="/purchases">
        <button
          className="px-2 py-1 rounded-md text-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          onClick={() => saveData()}
        >
          Complete
        </button>
      </Link>
    </div>
  );
};

export default Complete;
