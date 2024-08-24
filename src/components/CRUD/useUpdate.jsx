import { getDatabase, update, ref } from "firebase/database";
import { app, auth, storage } from "../../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import {
  editeInitialState,
  InventoryContext,
} from "../../context/GlobalContext";
import useFetch from "./useFetch";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";
// import photoDefult from "../../assets/default.png";
import { toast } from "react-toastify";
import { getDownloadURL, uploadBytes, ref as stRef } from "firebase/storage";

const useUpdate = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const {
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
    userId,
    userFirstName,
    userLastName,
    userEmail,
    userCurrentPassword,
    userNewPassword,
    userPhoto,
    setUserState,
    productImgs,
    soldProductImgs,
  } = useContext(InventoryContext);

  const { fetchPurchases } = useFetch();

  const updatePurchases = async () => {
    const db = getDatabase(app);
    update(ref(db, `inventory/${userId}/purchases/` + index), {
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
        // post img in storage
        if (productImgs === null) return;
        // const previmgRef = stRef(storage, "inv-file");
        const imageRef = stRef(storage, `inv-file/purchasesImgs/${index}`);
        uploadBytes(imageRef, productImgs).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            update(ref(db, `inventory/${userId}/purchases/` + index), {
              productImgUrl: url,
            });
          });
        });
        setEditeStates({
          ...editeInitialState,
        });
        navigate("/s/purchases");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 2000,
        });
      });

    //
    update(ref(db, `inventory/${userId}/op/${index}`), {
      opProductName: editeProductName,
      opProductPrice: editeProductPrice,
      opProductQuantity: editeProductQuantity,
      opSupplierName: editeSupplierName,
      opSupplierPhone: editeSupplierPhone,
    }).catch((error) => {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
    });
  };

  const updateSales = async () => {
    let checkExistencePrd = fetchPurchases?.filter(
      (product) => product?.productName.toLowerCase() === editeProductName
    );
    const db = getDatabase(app);
    update(
      ref(
        db,
        `inventory/${userId}/sales/${checkExistencePrd[0]["fireID"]}/${index}`
      ),
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
        // post img in storage
        if (soldProductImgs === null) return;
        // const previmgRef = stRef(storage, "inv-file");
        const imageRef = stRef(storage, `inv-file/salesImgs/${index}`);
        uploadBytes(imageRef, productImgs).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            update(ref(db, `inventory/${userId}/sales/` + index), {
              soldProductImgUrl: url,
            });
          });
        });
        setEditeStates({
          ...editeInitialState,
        });
        navigate("/s/sales");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 2000,
        });
      });
    // update the op db
    update(
      ref(db, `inventory/${userId}/op/${checkExistencePrd[0]["fireID"]}`),
      {
        opProductName: editeProductName,
        opProductPrice: editeProductPrice,
        opProductQuantity: editeProductQuantity,
      }
    ).catch((error) => {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
    });
  };

  //
  const updateProfil = async () => {
    const db = getDatabase(app);
    const imageRef = stRef(storage, `inv-file/AuthImgs/avatar.png`);
    if (userFirstName && userLastName && userEmail) {
      update(ref(db, `inventory/${userId}/Auth`), {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        photo: "",
      });
      let credentail = EmailAuthProvider.credential(
        auth.currentUser.email,
        userCurrentPassword
      );
      await reauthenticateWithCredential(auth.currentUser, credentail).catch(
        (error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 2000,
          });
        }
      );

      await updateEmail(auth.currentUser, userEmail).catch((error) =>
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 2000,
        })
      );
      await updatePassword(auth.currentUser, userNewPassword)
        .then(() => {
          setUserState({
            userFirstName: "",
            userLastName: "",
            userEmail: "",
            userCurrentPassword: "",
            userNewPassword: "",
          });
          //
          uploadBytes(imageRef, userPhoto).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              update(ref(db, `inventory/${userId}/Auth`), {
                photo: url,
              });
            });
          });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 2000,
          });
        });
    }
  };

  return {
    updatePurchases: () => updatePurchases(),
    updateSales: () => updateSales(),
    updateProfil: () => updateProfil(),
  };
};

export default useUpdate;
