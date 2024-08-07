import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import { useContext } from "react";
import { app, storage } from "../../firebaseConfig";
import {
  initialState,
  InventoryContext,
  saleInitialState,
} from "../../context/GlobalContext";
import useFetch from "./useFetch";
import { uploadBytes, ref as stRef, getDownloadURL } from "firebase/storage";

const usePost = () => {
  const {
    productID,
    productName,
    productQuantity,
    productPrice,
    companyName,
    supplierID,
    supplierName,
    supplierEmail,
    supplierPhone,
    date,
    setStates,
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductClientID,
    soldProductClientName,
    soldProductClientEmail,
    soldProductClientPhone,
    soldDate,
    setSoldProductStates,
    soldProductImgs,
    productImgs,
  } = useContext(InventoryContext);

  const { fetchPurchases, fetchOP } = useFetch();

  const db = getDatabase(app);
  const newPostKey = push(child(ref(db), "inventory/purchases/")).key;

  const postPurchases = async () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toUTCString().slice(0, 11);

    const newDocRef = ref(db, "inventory/purchases/" + newPostKey);
    const newDocRefInv = ref(db, "inventory/op/" + newPostKey);
    set(newDocRef, {
      productID,
      productName,
      productQuantity,
      productPrice: productQuantity * productPrice,
      companyName,
      supplierID,
      supplierName,
      supplierEmail,
      supplierPhone,
      date: today,
      fireID: newPostKey,
    })
      .then(() => {
        setStates({ ...initialState });
      })
      .catch((err) => {
        console.error("err:", err);
      });
    //
    set(newDocRefInv, {
      opProductQuantity: productQuantity,
      opProductPrice: productQuantity * productPrice,
      opProductName: productName,
    });
    //
    if (productImgs === null) return;
    const imageRef = stRef(
      storage,
      `inv-file/purchasesImgs/${productImgs.name}`
    );
    uploadBytes(imageRef, productImgs).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        update(ref(db, "inventory/purchases/" + newPostKey), {
          productImgUrl: url,
        });
      });
    });
  };
  //
  // check if the product existe in inv
  let checkExistencePrd = fetchPurchases?.filter(
    (product) =>
      product?.productName.toLowerCase() === soldProductName.toLowerCase()
  );
  const postSales = async () => {
    if (checkExistencePrd.length) {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed).toUTCString().slice(0, 11);
      const newDocRef = ref(
        db,
        `inventory/sales/${checkExistencePrd[0]?.fireID}/${newPostKey}`
      );
      set(newDocRef, {
        soldProductID,
        soldProductName,
        soldProductQuantity,
        soldProductPrice: soldProductQuantity * soldProductPrice,
        soldCompanyName,
        soldProductClientID,
        soldProductClientName,
        soldProductClientEmail,
        soldProductClientPhone,
        soldDate: today,
        soldFireID: newPostKey,
      })
        .then(() => {
          setSoldProductStates({ ...saleInitialState });
        })
        .catch((err) => {
          alert("err:", err);
        });
      //
      let result = fetchOP.filter((op) => op[checkExistencePrd[0]?.fireID]);
      // check if there is quantity to sale or not
      if (
        result[0][checkExistencePrd[0]?.fireID]?.opProductQuantity >=
        soldProductQuantity
      ) {
        update(ref(db, `inventory/op/${checkExistencePrd[0]?.fireID}`), {
          opProductPrice:
            soldProductQuantity * soldProductPrice -
            parseInt(result[0][checkExistencePrd[0]?.fireID]?.opProductPrice),
          opProductQuantity:
            parseInt(
              result[0][checkExistencePrd[0]?.fireID]?.opProductQuantity
            ) - parseInt(soldProductQuantity),
          opProductName: soldProductName,
        });
      } else {
        alert();
      }
      //
      if (soldProductImgs === null) return;
      const imageRef = stRef(
        storage,
        `inv-file/salesImgs/${soldProductImgs.name}`
      );
      uploadBytes(imageRef, soldProductImgs).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          update(
            ref(
              db,
              `inventory/sales/${checkExistencePrd[0]?.fireID}/${newPostKey}`
            ),
            {
              soldProductImgUrl: url,
            }
          );
        });
      });
    } else {
      return alert("there is no product with similare name");
    }
  };

  return {
    postPurchases: () => postPurchases(),
    postSales: () => postSales(),
  };
};

export default usePost;
