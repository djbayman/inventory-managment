import { getDatabase, update, ref } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import {
  editeInitialState,
  InventoryContext,
} from "../../context/GlobalContext";
import useFetch from "./useFetch";

const useUpdate = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const {
    setEditeStep,
    editeProductID,
    editeProductName,
    editeProductQuantity,
    editeProductPrice,
    editeCompanyName,
    editeSupplierID,
    editeSupplierName,
    editeSupplierEmail,
    editeSupplierPhone,
    setEditeStates,
  } = useContext(InventoryContext);

  const { fetchPurchases } = useFetch();

  const updatePurchases = async () => {
    const db = getDatabase(app);
    update(ref(db, "inventory/purchases/" + index), {
      productID: editeProductID,
      productName: editeProductName,
      productQuantity: editeProductQuantity,
      productPrice: editeProductPrice,
      companyName: editeCompanyName,
      supplierID: editeSupplierID,
      supplierName: editeSupplierName,
      supplierEmail: editeSupplierEmail,
      supplierPhone: editeSupplierPhone,
      fireID: index,
    })
      .then(() => {
        setEditeStates({
          ...editeInitialState,
        });
        navigate("/purchases");
      })
      .catch((err) => {
        alert("err:", err);
      });

    //
    update(ref(db, `inventory/op/${index}`), {
      opProductID: editeProductID,
      opProductName: editeProductName,
      opProductPrice: editeProductPrice,
      opProductQuantity: editeProductQuantity,
      opCompanyName: editeCompanyName,
      opSupplierID: editeSupplierID,
      opSupplierName: editeSupplierName,
      opSupplierEmail: editeSupplierEmail,
      opSupplierPhone: editeSupplierPhone,
    }).catch((err) => {
      alert("err:", err);
    });
  };

  const updateSales = async () => {
    let checkExistencePrd = fetchPurchases?.filter(
      (product) => product?.productName.toLowerCase() === editeProductName
    );
    const db = getDatabase(app);
    update(
      ref(db, `inventory/sales/${checkExistencePrd[0]["fireID"]}/${index}`),
      {
        soldProductID: editeProductID,
        soldProductName: editeProductName,
        soldProductQuantity: editeProductQuantity,
        soldProductPrice: editeProductPrice,
        soldCompanyName: editeCompanyName,
        soldProductClientID: "",
        soldProductClientName: "",
      }
    )
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
    // update the op db
    update(ref(db, `inventory/op/${checkExistencePrd[0]["fireID"]}`), {
      opProductName: editeProductName,
      opProductPrice: editeProductPrice,
      opProductQuantity: editeProductQuantity,
    }).catch((err) => {
      alert("err:", err);
    });
  };

  return {
    updatePurchases: () => updatePurchases(),
    updateSales: () => updateSales(),
  };
};

export default useUpdate;
