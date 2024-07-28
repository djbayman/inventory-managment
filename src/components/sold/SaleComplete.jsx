import { getDatabase, push, ref, set } from "firebase/database";
import React, { useContext } from "react";
import {
  InventoryContext,
  saleInitialState,
} from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { app, storage } from "../../firebaseConfig";
import { uploadBytes, ref as stRef, getDownloadURL } from "firebase/storage";

const SaleComplete = () => {
  const {
    setSaleStep,
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductClientID,
    soldProductClientName,
    soldDate,
    setSoldProductStates,
    soldProductImgs,
    setSoldImgUrls,
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

  console.log(soldProductImgs);

  const uploadSaleImgs = async () => {
    if (soldProductImgs === null) return;

    const imageRef = stRef(
      storage,
      `inv-file/salesImgs/${soldProductImgs.name}`
    );
    uploadBytes(imageRef, soldProductImgs).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setSoldImgUrls((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-40">
      <Link to="/sales">
        <button
          className="px-2 py-1 rounded-md text-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          onClick={() => {
            uploadSaleImgs();
            saveSoldData();
          }}
        >
          Sold Complete
        </button>
      </Link>
    </div>
  );
};

export default SaleComplete;
