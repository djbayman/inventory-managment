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
};

export const saleInitialState = {
  soldProductID: "",
  soldProductName: "",
  soldProductQuantity: "",
  soldProductPrice: "",
  soldCompanyName: "",
  soldProductImg: "",
  soldProductSupplierID: "",
  soldProductSupplierName: "",
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
      soldProductSupplierID,
      soldProductSupplierName,
    },
    setSoldProductStates,
  ] = useState(saleInitialState);

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
    setEditeStates,
    saleStep,
    setSaleStep,
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductImg,
    soldProductSupplierID,
    soldProductSupplierName,
    setSoldProductStates,
    fetchedSoldData,
    setFetchedSoldData,
    soldKeys,
    setSoldKeys,
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
