import { CiSquareMore } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import productImg from "../assets/depositphotos_2891341-stock-photo-modern-laptop.jpg";
import { Link } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { CgDollar } from "react-icons/cg";
import { useContext, useEffect, useRef, useState } from "react";
import { InventoryContext } from "../context/GlobalContext";
import { get, getDatabase, ref } from "firebase/database";
import { app } from "../firebaseConfig";

const Purchases = () => {
  const [toggle, setToggle] = useState({});
  const { fetchedData, setFetchedData, setKeys, setEditeStates } =
    useContext(InventoryContext);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "inventory/purshases");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setFetchedData(Object.values(snapshot.val()));
      setKeys(Object.keys(snapshot.val()));
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getProductById = (index) => {
    let specificData = fetchedData?.filter((data, i) => i === index);
    setEditeStates({
      editeProductID: specificData[0]?.productID,
      editeProductName: specificData[0]?.productName,
      editeProductQuantity: specificData[0]?.productQuantity,
      editeProductPrice: specificData[0]?.productPrice,
      editeCompanyName: specificData[0]?.companyName,
      editeProductImg: specificData[0]?.productImg,
      editeSupplierID: specificData[0]?.supplierID,
      editeSupplierName: specificData[0]?.supplierName,
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
            to="/purchases/addProduct"
            className="flex items-center rounded-md gap-3"
          >
            <span>
              <FaPlus />
            </span>
            Add Product
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
        {fetchedData?.map((data, index) => (
          <ul
            className="p-6 text-gray-500 text-md flex items-center justify-between  border-b-2 border-slate-300 hover:bg-cyan-50"
            key={index}
          >
            <li className="w-20 text-center">{data.productID}</li>
            <li className="w-32 ">{data.productName}</li>
            <li className="w-32 ">
              <img
                src={data.productImg}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </li>
            <li className="w-32 ">{data.productQuantity}</li>
            <li className="w-32 ">{data.productPrice}</li>
            <li className="w-32 ">{data.companyName}</li>
            <li className="w-32 ">29 apr</li>
            <li className="w-32  relative">
              <CiSquareMore
                className=" text-4xl text-cyan-950 cursor-pointer"
                onClick={() => toggleFunction(index)}
              />
              <div
                className={
                  toggle[index]
                    ? "absolute top-10 right-32 w-24 bg-gray-100 text-black font-semibold rounded-md"
                    : "hidden"
                }
              >
                <Link to={`/purchases/editeProduct/${index}`}>
                  <span
                    className="flex items-center gap-2 justify-center pb-2
                      hover:border-x-4 hover:border-cyan-600 transition-colors
                      cursor-pointer"
                    onClick={() => getProductById(index)}
                  >
                    <FiEdit3 /> Edit
                  </span>
                </Link>
                <span className="flex items-center gap-2 justify-center pt-2 hover:border-x-4 hover:border-emerald-600 transition-colors cursor-pointer">
                  <CgDollar /> Sale
                </span>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
