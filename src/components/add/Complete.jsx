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
    productImg,
    supplierID,
    supplierName,
    setStates,
  } = useContext(InventoryContext);

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "inventory/purshases"));
    set(newDocRef, {
      productID,
      productName,
      productPrice,
      productQuantity,
      companyName,
      productImg,
      supplierID,
      supplierName,
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
    <div className="flex items-center justify-center min-h-52">
      <Link to="/purchases">
        <button
          className="px-4 py-2 rounded-md text-xl font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          onClick={() => saveData()}
        >
          Complete
        </button>
      </Link>
    </div>
  );
};

export default Complete;
