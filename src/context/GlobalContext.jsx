import { createContext, useState } from "react";

export const InventoryContext = createContext();

export const initialState = {
  productID: "",
  productName: "",
  productQuantity: "",
  productPrice: "",
  companyName: "",
  productImg: "",
  supplierID: "",
  supplierName: "",
  date: "",
};

export const saleInitialState = {
  soldProductID: "",
  soldProductName: "",
  soldProductQuantity: "",
  soldProductPrice: "",
  soldCompanyName: "",
  soldProductImg: "",
  soldProductClientID: "",
  soldProductClientName: "",
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
  editeDate: "",
};

const InventoryProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [edteStep, setEditeStep] = useState(1);
  const [saleStep, setSaleStep] = useState(1);
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const [keys, setKeys] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedSoldData, setFetchedSoldData] = useState([]);
  const [soldKeys, setSoldKeys] = useState([]);
  const [saleIt, setSaleIt] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);

  const [
    {
      productID,
      productName,
      productQuantity,
      productPrice,
      companyName,
      productImg,
      supplierID,
      supplierName,
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
      soldProductImg,
      soldProductClientID,
      soldProductClientName,
      soldDate,
    },
    setSoldProductStates,
  ] = useState(saleInitialState);
  const [{ userName, userEmail, userPassowrd }, setUserState] = useState("");

  const value = {
    step,
    setStep,
    edteStep,
    setEditeStep,
    sideBarToggle,
    setSideBarToggle,
    productID,
    productName,
    productQuantity,
    productPrice,
    companyName,
    productImg,
    supplierID,
    supplierName,
    date,
    setStates,
    fetchedData,
    setFetchedData,
    keys,
    setKeys,
    editeProductID,
    editeProductName,
    editeProductQuantity,
    editeProductPrice,
    editeCompanyName,
    editeProductImg,
    editeSupplierID,
    editeSupplierName,
    editeDate,
    setEditeStates,
    saleStep,
    setSaleStep,
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductImg,
    soldProductClientID,
    soldProductClientName,
    soldDate,
    setSoldProductStates,
    fetchedSoldData,
    setFetchedSoldData,
    soldKeys,
    setSoldKeys,
    saleIt,
    setSaleIt,
    searchedResults,
    setSearchedResults,
    userName,
    userEmail,
    userPassowrd,
    setUserState,
    imgUrls,
    setImgUrls,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
