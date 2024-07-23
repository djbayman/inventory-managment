import React, { useContext } from "react";
import {
  editeInitialState,
  InventoryContext,
} from "../../context/GlobalContext";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EditeComplete = () => {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    setEditeStep,
    keys,
    editeProductID,
    editeProductName,
    editeProductQuantity,
    editeProductPrice,
    editeCompanyName,
    editeProductImg,
    editeSupplierID,
    editeSupplierName,
    setEditeStates,
    soldKeys,
  } = useContext(InventoryContext);

  const updateData = async () => {
    const db = getDatabase(app);
    update(ref(db, "inventory/purshases/" + keys[parseInt(index)]), {
      productID: editeProductID,
      productName: editeProductName,
      productQuantity: editeProductQuantity,
      productPrice: editeProductPrice,
      companyName: editeCompanyName,
      productImg: editeProductImg,
      supplierID: editeSupplierID,
      supplierName: editeSupplierName,
    })
      .then(() => {
        setEditeStep(1);
        setEditeStates({
          ...editeInitialState,
        });
        navigate("/purchases");
      })
      .catch((err) => {
        alert("err:", err);
      });
  };
  const updateSaleData = async () => {
    const db = getDatabase(app);
    update(ref(db, "inventory/sales/" + soldKeys[parseInt(index)]), {
      soldProductID: editeProductID,
      soldProductName: editeProductName,
      soldProductQuantity: editeProductQuantity,
      soldProductPrice: editeProductPrice,
      soldCompanyName: editeCompanyName,
      soldProductImg: editeProductImg,
      soldProductSupplierID: editeSupplierID,
      soldProductSupplierName: editeSupplierName,
    })
      .then(() => {
        setEditeStep(1);
        setEditeStates({
          ...editeInitialState,
        });
        navigate("/sales");
      })
      .catch((err) => {
        alert("err:", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-52">
      <button
        className="px-4 py-2 rounded-md text-xl font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
        onClick={() => {
          if (location.pathname.includes("purchases")) {
            updateData();
          } else if (location.pathname.includes("sales")) {
            updateSaleData();
          }
        }}
      >
        Edite Complete
      </button>
    </div>
  );
};

export default EditeComplete;
