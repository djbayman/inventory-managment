import { CiSquareMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { app, storage } from "../firebaseConfig";
import { InventoryContext } from "../context/GlobalContext";
import {
  ref as stRef,
  deleteObject,
  listAll,
  getDownloadURL,
} from "firebase/storage";

const Sales = () => {
  const [toggle, setToggle] = useState({});
  const {
    fetchedSoldData,
    setFetchedSoldData,
    setEditeStates,
    setSoldKeys,
    soldKeys,
    searchedResults,
    setSoldImgUrls,
    soldImgUrls,
  } = useContext(InventoryContext);

  const fetchSoldData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "inventory/sales");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFetchedSoldData(Object.values(data));
        setSoldKeys(Object.keys(data));
      }
    });
  };

  const globalRef = stRef(storage, `inv-file/salesImgs/`);

  useEffect(() => {
    fetchSoldData();
    setSoldImgUrls([]);
    listAll(globalRef).then((response) => {
      response.items.forEach((item) => {
        console.log(item);
        getDownloadURL(item).then((url) => {
          console.log(url);
          setSoldImgUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const getSoldProductById = (index) => {
    let specificData = fetchedSoldData?.filter((data, i) => i === index);
    setEditeStates({
      editeProductID: specificData[0]?.soldProductID,
      editeProductName: specificData[0]?.soldProductName,
      editeProductQuantity: specificData[0]?.soldProductQuantity,
      editeProductPrice: specificData[0]?.soldProductPrice,
      editeCompanyName: specificData[0]?.soldCompanyName,
      editeProductImg: specificData[0]?.soldProductImg,
      editeSupplierID: specificData[0]?.soldProductClientID,
      editeSupplierName: specificData[0]?.soldProductClientName,
    });
  };

  const deletSoldProduct = async (id, index) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "inventory/sales/" + id);
    await remove(dbRef);
    if (fetchedSoldData.length === 1) {
      setFetchedSoldData([]);
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

  const toggleFunction = (id) => {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  };

  let theMainContent = searchedResults?.length
    ? searchedResults
    : fetchedSoldData;

  return (
    <div className="mx-4">
      <div className="comp-head my-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Sold Products</h1>
        <Link to="/sales/soldProduct" className="">
          <button className="shadow-lg shadow-indigo-500/50 ms-auto px-2 py-2 border-2 border-cyan-700 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white  font-semibold flex items-center rounded-md gap-2">
            <span>
              <FaPlus />
            </span>
            Add to Sales
          </button>
        </Link>
      </div>
      <div className="scroll-container border-2 rounded-md border-slate-300 min-h-64 my-6   ">
        <ul
          className="scroll-child p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-slate-300 "
          style={{
            gridTemplateColumns: "60px repeat(6, 1fr) 60px",
          }}
        >
          <li className="border-e-2 border-slate-300 text-left my-auto">#</li>
          <li className=" ">Product Name</li>
          <li className=" ">Product Image</li>
          <li className=" ">Product Quantity</li>
          <li className=" ">Product Price</li>
          <li className=" ">Company Name</li>
          <li className=" ">Date</li>
          <li className=" ">Action</li>
        </ul>
        {theMainContent
          ?.map((data, index) => (
            <ul
              className="scroll-child p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-slate-300 "
              style={{
                gridTemplateColumns: "60px repeat(6, 1fr) 60px",
              }}
              key={index}
            >
              <li className="border-e-2 border-slate-300 text-left my-auto">
                {data.soldProductID}
              </li>
              <li className="my-auto ">{data.soldProductName}</li>
              <li className=" ">
                <img
                  src={soldImgUrls[index]}
                  alt=""
                  className="w-10 h-10 rounded-full my-auto"
                />
              </li>
              <li className="my-auto ">{data.soldProductQuantity}</li>
              <li className="my-auto ">{data.soldProductPrice}</li>
              <li className="my-auto ">{data.soldCompanyName}</li>
              <li className="my-auto ">{data.soldDate}</li>
              <li className="my-auto  relative">
                <CiSquareMore
                  className=" text-2xl text-cyan-950 cursor-pointer"
                  onClick={() => toggleFunction(index)}
                />
                <div
                  className={
                    toggle[index]
                      ? "absolute top-0 right-16  w-24 bg-gray-200 text-black font-semibold rounded-md"
                      : "hidden"
                  }
                >
                  <Link to={`/sales/editeProduct/${soldKeys[index]}`}>
                    <span
                      className="flex items-center gap-2 ps-4 pb-2
                      hover:border-x-4 hover:border-cyan-600 transition-colors
                      cursor-pointer"
                      onClick={() => getSoldProductById(index)}
                    >
                      <FiEdit3 /> Edit
                    </span>
                  </Link>
                  <span
                    className="flex items-center gap-2 ps-4 pt-2 hover:border-x-4 hover:border-red-600 transition-colors cursor-pointer"
                    onClick={() => deletSoldProduct(soldKeys[index])}
                  >
                    <FiTrash2 /> Delete
                  </span>
                </div>
              </li>
            </ul>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Sales;
