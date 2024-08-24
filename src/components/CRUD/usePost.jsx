import {
  child,
  get,
  getDatabase,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { app, auth, storage } from "../../firebaseConfig";
import {
  initialState,
  InventoryContext,
  saleInitialState,
} from "../../context/GlobalContext";
import useFetch from "./useFetch";
import {
  uploadBytes,
  ref as stRef,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";

const usePost = () => {
  const navigate = useNavigate();
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
    userId,
    userPhoto,
    setUserState,
    setUserId,
  } = useContext(InventoryContext);

  const { fetchPurchases, fetchOP } = useFetch();

  const db = getDatabase(app);
  const newPostKey = push(child(ref(db), `inventory/${userId}/purchases`)).key;

  const postPurchases = async () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toUTCString().slice(0, 11);

    const newDocRef = ref(db, `inventory/${userId}/purchases/` + newPostKey);
    const newDocRefInv = ref(db, `inventory/${userId}/op/` + newPostKey);
    //
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
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 2000,
        });
      });
    //
    set(newDocRefInv, {
      opProductQuantity: productQuantity,
      opProductPrice: productQuantity * productPrice,
      opProductName: productName,
      opSupplierName: supplierName,
      opSupplierPhone: supplierPhone,
    });
    // post img in storage
    if (productImgs === null) return;
    const imageRef = stRef(storage, `inv-file/purchasesImgs/${newPostKey}`);
    uploadBytes(imageRef, productImgs).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        update(ref(db, `inventory/${userId}/purchases/` + newPostKey), {
          productImgUrl: url,
        });
      });
    });
    navigate("/s/purchases");
  };

  // check if the product existe in inv
  let checkExistencePrd = fetchPurchases?.filter(
    (product) =>
      product?.productName.toLowerCase() === soldProductName.toLowerCase()
  );
  const postSales = async () => {
    //
    let result = fetchOP?.filter((op) => op[checkExistencePrd[0]?.fireID]);
    if (checkExistencePrd.length) {
      if (
        parseInt(soldProductQuantity) <=
        parseInt(result[0][checkExistencePrd[0]?.fireID]?.opProductQuantity)
      ) {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed).toUTCString().slice(0, 11);
        const newDocRef = ref(
          db,
          `inventory/${userId}/sales/${checkExistencePrd[0]?.fireID}/${newPostKey}`
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
            update(
              ref(db, `inventory/${userId}/op/${checkExistencePrd[0]?.fireID}`),
              {
                opProductPrice:
                  parseInt(
                    result[0][checkExistencePrd[0]?.fireID]?.opProductPrice
                  ) -
                  parseInt(soldProductPrice) * soldProductQuantity,
                opProductQuantity:
                  parseInt(
                    result[0][checkExistencePrd[0]?.fireID]?.opProductQuantity
                  ) - parseInt(soldProductQuantity),
                opProductName: soldProductName,
              }
            );
            navigate("/s/sales");
            setSoldProductStates({ ...saleInitialState });
            // if (soldProductImgs === null) return;
            const imageRef = stRef(storage, `inv-file/salesImgs/${newPostKey}`);
            uploadBytes(imageRef, soldProductImgs).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                update(
                  ref(
                    db,
                    `inventory/${userId}/sales/${checkExistencePrd[0]?.fireID}/${newPostKey}`
                  ),
                  {
                    soldProductImgUrl: url,
                  }
                );
              });
            });
          })
          .catch((error) => {
            toast.error(error.message, {
              position: "bottom-center",
              autoClose: 2000,
            });
          });
      } else {
        toast.error("the quantity you have insert does not exicts", {
          position: "bottom-center",
          autoClose: 2000,
        });
      }

      // check if there is quantity to sale it or not
      // if (
      //   result[0][checkExistencePrd[0]?.fireID]?.opProductQuantity >=
      //   soldProductQuantity
      // ) {
      //   update(
      //     ref(db, `inventory/${userId}/op/${checkExistencePrd[0]?.fireID}`),
      //     {
      //       opProductPrice:
      //         soldProductQuantity * soldProductPrice -
      //         parseInt(result[0][checkExistencePrd[0]?.fireID]?.opProductPrice),
      //       opProductQuantity:
      //         parseInt(
      //           result[0][checkExistencePrd[0]?.fireID]?.opProductQuantity
      //         ) - parseInt(soldProductQuantity),
      //       opProductName: soldProductName,
      //     }
      //   );
      //   navigate("/s/sales");
      // }
      // //
    } else {
      return toast.error("there is no product with similare name", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  };

  // const uploadPImg = async () => {
  //   // const imgDefaultRef = stRef(storage, `inv-file/AuthImgs/google.png`);
  //   // const imageRef = stRef(storage, `inv-file/AuthImgs/${userPhoto?.name}`);
  //   // deleteObject(imgDefaultRef);
  //   // uploadBytes(imageRef, userPhoto).then((snapshot) => {
  //   //   getDownloadURL(snapshot.ref).then((url) => {
  //   //     update(ref(db, `inventory/${userId}/Auth`), {
  //   //       photo: url,
  //   //     });
  //   //   });
  //   // });
  // };

  return {
    postPurchases: () => postPurchases(),
    postSales: () => postSales(),
    // uploadPImg: () => uploadPImg(),
  };
};

export default usePost;
