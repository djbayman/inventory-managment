import { CiSquareMore } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { CgDollar } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../context/GlobalContext";
import useFetch from "./CRUD/useFetch";
import useDelete from "./CRUD/useDelete";

const Purchases = () => {
  const [toggle, setToggle] = useState({});
  let navigate = useNavigate();
  let location = useLocation();
  const { setEditeStates, setSaleIt, searchedResults } =
    useContext(InventoryContext);

  const { fetchPurchases } = useFetch();
  const { deletePurchases } = useDelete();

  const getProductById = (index) => {
    let specificProduct = fetchPurchases?.filter((data, i) => i === index);
    setEditeStates({
      editeProductID: specificProduct[0]?.productID,
      editeProductName: specificProduct[0]?.productName,
      editeProductQuantity: specificProduct[0]?.productQuantity,
      editeProductPrice: specificProduct[0]?.productPrice,
      editeCompanyName: specificProduct[0]?.companyName,
      editeSupplierID: specificProduct[0]?.supplierID,
      editeSupplierName: specificProduct[0]?.supplierName,
      editeSupplierEmail: specificProduct[0]?.supplierEmail,
      editeSupplierPhone: specificProduct[0]?.supplierPhone,
    });
  };

  const saleItProduct = (index) => {
    let specificProduct = fetchPurchases?.filter((data, i) => i === index);
    setSaleIt(specificProduct);
    navigate("/s/sales/soldProduct", {
      state: { previousLocationPathname: location.pathname },
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
    : fetchPurchases;

  return (
    <div className="mx-4">
      <div className="comp-head my-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Products</h1>
        <Link to="/s/purchases/addProduct" className="">
          <button className="shadow-lg shadow-indigo-500/50 ms-auto px-2 py-2 border-2 border-cyan-700 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white  font-semibold flex items-center rounded-md gap-2">
            <span>
              <FaPlus />
            </span>
            Add Product
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
          <li className="">Product Name</li>
          <li className="">Product Image</li>
          <li className="">Product Quantity</li>
          <li className="">Product Price</li>
          <li className="">Company Name</li>
          <li className="">Date</li>
          <li className="">Action</li>
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
              <li className="border-e-2 border-slate-300 text-left my-auto text-wrap">
                {data.productID}
              </li>
              <li className="my-auto ">{data.productName}</li>
              <li className="my-auto ">
                <img
                  src={data.productImgUrl}
                  alt=""
                  className="w-10 h-10 rounded-full my-auto"
                />
              </li>
              <li className="my-auto ">{data.productQuantity}</li>
              <li className="my-auto ">{data.productPrice}</li>
              <li className="my-auto ">{data.companyName}</li>
              <li className="my-auto ">{data.date}</li>
              <li className="my-auto  relative">
                <CiSquareMore
                  className=" text-2xl text-cyan-950 cursor-pointer"
                  onClick={() => {
                    toggleFunction(index);
                  }}
                />
                <div
                  className={
                    toggle[index]
                      ? "absolute top-0 right-16 w-24 bg-gray-100 text-black font-semibold rounded-md py-2"
                      : "hidden"
                  }
                >
                  <Link to={`/s/purchases/editeProduct/${data.fireID}`}>
                    <span
                      className="flex items-center gap-2 justify-center pb-2
                      hover:border-x-4 hover:border-cyan-600 hover:bg-gray-200 transition-colors
                      cursor-pointer"
                      onClick={() => getProductById(index)}
                    >
                      <FiEdit3 /> Edit
                    </span>
                  </Link>

                  <span
                    className="flex items-center gap-2 justify-center pt-2 hover:border-x-4 hover:border-emerald-600 hover:bg-gray-200 transition-colors cursor-pointer"
                    onClick={() => saleItProduct(index)}
                  >
                    <CgDollar /> Sale it
                  </span>
                  <span
                    className="flex items-center gap-2 ps-4 pt-2 hover:border-x-4 hover:border-red-600 hover:bg-gray-200 transition-colors cursor-pointer"
                    onClick={() => deletePurchases(data.fireID, index)}
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

export default Purchases;
