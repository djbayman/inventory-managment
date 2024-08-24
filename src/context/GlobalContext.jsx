import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const initialState = {
  productID: "",
  productName: "",
  productQuantity: "",
  productPrice: "",
  companyName: "",
  supplierID: "",
  supplierName: "",
  supplierEmail: "",
  supplierPhone: "",
  date: "",
};

export const saleInitialState = {
  soldProductID: "",
  soldProductName: "",
  soldProductQuantity: "",
  soldProductPrice: "",
  soldCompanyName: "",
  soldProductClientID: "",
  soldProductClientName: "",
  soldProductClientEmail: "",
  soldProductClientPhone: "",
  soldDate: "",
};

export const editeInitialState = {
  editeProductID: "",
  editeProductName: "",
  editeProductQuantity: "",
  editeProductPrice: "",
  editeCompanyName: "",
  editeProductImg: "",
  editeSupplierID: "",
  editeSupplierName: "",
  editeSupplierEmail: "",
  editeSupplierPhone: "",
  editeDate: "",
};

const InventoryProvider = ({ children }) => {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [saleIt, setSaleIt] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [productImgs, setProductImgs] = useState(null);
  const [soldProductImgs, setSoldProductImgs] = useState(null);
  const [imgUrls, setImgUrls] = useState([]);
  const [soldImgUrls, setSoldImgUrls] = useState([]);
  const [next, setNext] = useState(false);
  const [soldNext, setSoldNext] = useState(false);
  const [editeNext, setEditeNext] = useState(false);
  const [userId, setUserId] = useState("");
  const [navHead, setNavHead] = useState("");

  const [
    {
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
    },
    setStates,
  ] = useState(initialState);
  const [
    {
      editeProductID,
      editeProductName,
      editeProductQuantity,
      editeProductPrice,
      editeCompanyName,
      editeProductImg,
      editeSupplierID,
      editeSupplierName,
      editeSupplierEmail,
      editeSupplierPhone,
      editeDate,
    },
    setEditeStates,
  ] = useState({ ...editeInitialState });
  const [
    {
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
    },
    setSoldProductStates,
  ] = useState(saleInitialState);
  const [
    {
      userFirstName,
      userLastName,
      userEmail,
      userCurrentPassword,
      userNewPassword,
      userPhoto,
    },
    setUserState,
  ] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userCurrentPassword: "",
    userNewPassword: "",
    userPhoto: "",
  });

  const value = {
    sideBarToggle,
    setSideBarToggle,
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
    editeProductID,
    editeProductName,
    editeProductQuantity,
    editeProductPrice,
    editeCompanyName,
    editeProductImg,
    editeSupplierID,
    editeSupplierName,
    editeSupplierEmail,
    editeSupplierPhone,
    editeDate,
    setEditeStates,
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
    saleIt,
    setSaleIt,
    searchedResults,
    setSearchedResults,
    userFirstName,
    userLastName,
    userPhoto,
    userEmail,
    userCurrentPassword,
    userNewPassword,
    setUserState,
    productImgs,
    setProductImgs,
    imgUrls,
    setImgUrls,
    soldProductImgs,
    setSoldProductImgs,
    soldImgUrls,
    setSoldImgUrls,
    next,
    setNext,
    soldNext,
    setSoldNext,
    editeNext,
    setEditeNext,
    userId,
    setUserId,
    navHead,
    setNavHead,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
