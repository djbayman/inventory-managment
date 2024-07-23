import { CiSquareMore } from "react-icons/ci";
import productImg from "../assets/depositphotos_2891341-stock-photo-modern-laptop.jpg";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "../firebaseConfig";
import { InventoryContext } from "../context/GlobalContext";

const Sales = () => {
  const [toggle, setToggle] = useState({});
  const { fetchedSoldData, setFetchedSoldData, setEditeStates, setSoldKeys } =
    useContext(InventoryContext);

  const fetchSoldData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "inventory/sales");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setFetchedSoldData(Object.values(snapshot.val()));
      setSoldKeys(Object.keys(snapshot.val()));
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    fetchSoldData();
  }, []);

  const getSoldProductById = (index) => {
    let specificData = fetchedSoldData?.filter((data, i) => i === index);
    console.log(specificData);
    setEditeStates({
      editeProductID: specificData[0]?.soldProductID,
      editeProductName: specificData[0]?.soldProductName,
      editeProductQuantity: specificData[0]?.soldProductQuantity,
      editeProductPrice: specificData[0]?.soldProductPrice,
      editeCompanyName: specificData[0]?.soldCompanyName,
      editeProductImg: specificData[0]?.soldProductImg,
      editeSupplierID: specificData[0]?.soldProductSupplierID,
      editeSupplierName: specificData[0]?.soldProductSupplierName,
    });
  };

  const toggleFunction = (id) => {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  };

  return (
    <div className="m-6">
      <div className="comp-head my-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <button className="shadow-lg shadow-indigo-500/50 ms-auto px-2 py-2 border-2 border-cyan-700 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white text-lg font-semibold flex items-center rounded-md">
          <Link
            to="/sales/soldProduct"
            className="flex items-center rounded-md gap-3"
          >
            <span>
              <FaPlus />
            </span>
            Add to sales
          </Link>
        </button>
      </div>
      <div className="border-2 rounded-md border-slate-300 min-h-64 my-6">
        <ul className="p-6 text-gray-500 text-md flex items-center justify-between  border-b-2 border-slate-300 ">
          <li className="w-20 text-center">#</li>
          <li className="w-32 ">Product Name</li>
          <li className="w-32 ">Product Image</li>
          <li className="w-32 ">Product Quantity</li>
          <li className="w-32 ">Product Price</li>
          <li className="w-32 ">Company Name</li>
          <li className="w-32 ">Date</li>
          <li className="w-32 ">Action</li>
        </ul>
        {fetchedSoldData?.map((data, index) => (
          <ul
            className="p-6 text-gray-500 text-md flex items-center justify-between  border-b-2 border-slate-300 hover:bg-cyan-50"
            key={index}
          >
            <li className="w-20 text-center">{data.soldProductID}</li>
            <li className="w-32 ">{data.soldProductName}</li>
            <li className="w-32 ">
              <img
                src={data.soldProductImg}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </li>
            <li className="w-32 ">{data.soldProductQuantity}</li>
            <li className="w-32 ">{data.soldProductPrice}</li>
            <li className="w-32 ">{data.soldCompanyName}</li>
            <li className="w-32 ">29 apr</li>
            <li className="w-32  relative">
              <CiSquareMore
                className=" text-4xl text-cyan-950 cursor-pointer"
                onClick={() => toggleFunction(index)}
              />
              <div
                className={
                  toggle[index]
                    ? "absolute top-10 right-32 w-24 bg-gray-200 text-black font-semibold rounded-md"
                    : "hidden"
                }
              >
                <Link to={`/sales/editeProduct/${index}`}>
                  <span
                    className="flex items-center gap-2 ps-4 pb-2
                      hover:border-x-4 hover:border-cyan-600 transition-colors
                      cursor-pointer"
                    onClick={() => getSoldProductById(index)}
                  >
                    <FiEdit3 /> Edit
                  </span>
                </Link>
                <span className="flex items-center gap-2 ps-4 pt-2 hover:border-x-4 hover:border-red-600 transition-colors cursor-pointer">
                  <FiTrash2 /> Delete
                </span>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sales;
