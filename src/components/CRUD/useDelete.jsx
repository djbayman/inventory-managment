import { getDatabase, ref, remove, update } from "firebase/database";
import { app, storage } from "../../firebaseConfig";
import { ref as stRef, deleteObject, listAll } from "firebase/storage";
import useFetch from "./useFetch";
import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const useDelete = () => {
  const { fetchPurchases, fetchSales, fetchOP } = useFetch();
  const { userId } = useContext(InventoryContext);

  const deletePurchases = async (id, index) => {
    const globalRef = stRef(storage, `inv-file/purchasesImgs/`);

    const db = getDatabase(app);
    const dbRefP = ref(db, `inventory/${userId}/purchases/` + id);
    const dbRefOP = ref(db, `inventory/${userId}/op/` + id);
    const dbRefS = ref(db, `inventory/${userId}/sales/` + id);
    await remove(dbRefP);
    await remove(dbRefOP);
    await remove(dbRefS);

    if (fetchPurchases.length === 1) {
      window.location.reload();
    }
    // delete the img
    listAll(globalRef).then((response) => {
      let deletedImg = response?.items.filter((item, iItem) => iItem === index);
      console.log(deletedImg);
      const imgRef = stRef(
        storage,
        `inv-file/purchasesImgs/${deletedImg[0]?.name}`
      );
      deleteObject(imgRef);
    });
  };
  //
  const deleteSales = async (data, index) => {
    const globalRef = stRef(storage, `inv-file/salesImgs/`);
    let getParentId = fetchPurchases?.filter(
      (product) =>
        product?.productName.toLowerCase() ===
        data.soldProductName.toLowerCase()
    );
    const db = getDatabase(app);
    const dbRefS = ref(
      db,
      `inventory/${userId}/sales/${getParentId[0]["fireID"]}/${data.soldFireID}`
    );
    let result = fetchOP?.filter((op) => op[getParentId[0]?.fireID]);

    await remove(dbRefS);
    await update(ref(db, `inventory/${userId}/op/${getParentId[0]?.fireID}`), {
      opProductPrice:
        parseInt(result[0][getParentId[0]?.fireID]?.opProductPrice) +
        parseInt(data.soldProductPrice),
      opProductQuantity:
        parseInt(result[0][getParentId[0]?.fireID]?.opProductQuantity) +
        parseInt(data.soldProductQuantity),
    });
    if (fetchSales.length === 1) {
      window.location.reload();
    }
    // delete the img
    listAll(globalRef).then((response) => {
      console.log(response);
      let deletedImg = response?.items.filter((item, iItem) => iItem === index);
      const imgRef = stRef(
        storage,
        `inv-file/salesImgs/${deletedImg[0]?.name}`
      );
      deleteObject(imgRef);
    });
  };

  return {
    deletePurchases: (id, index) => deletePurchases(id, index),
    deleteSales: (id, index) => deleteSales(id, index),
  };
};

export default useDelete;
