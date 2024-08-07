import { getDatabase, ref, remove } from "firebase/database";
import { app, storage } from "../../firebaseConfig";
import { ref as stRef, deleteObject, listAll } from "firebase/storage";
import useFetch from "./useFetch";

const useDelete = () => {
  const { fetchPurchases, fetchSales } = useFetch();

  const deletePurchases = async (id, index) => {
    const globalRef = stRef(storage, `inv-file/purchasesImgs/`);

    const db = getDatabase(app);
    const dbRefP = ref(db, "inventory/purchases/" + id);
    const dbRefOP = ref(db, "inventory/op/P/" + id);
    const dbRefOS = ref(db, "inventory/op/S/" + id);
    const dbRefS = ref(db, "inventory/sales/" + id);
    await remove(dbRefP);
    await remove(dbRefOP);
    await remove(dbRefOS);
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
      `inventory/sales/${getParentId[0]["fireID"]}/${data.soldFireID}`
    );
    const dbRefOS = ref(
      db,
      `inventory/op/S/${getParentId[0]["fireID"]}/${data.soldFireID}`
    );
    await remove(dbRefS);
    await remove(dbRefOS);
    if (fetchSales.length === 1) {
      window.location.reload();
    }
    // delete the img
    listAll(globalRef).then((response) => {
      console.log(response);
      let deletedImg = response?.items.filter((item, iItem) => iItem === index);
      const imgRef = stRef(
        storage,
        `inv-file/purchasesImgs/${deletedImg[0]?.name}`
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
