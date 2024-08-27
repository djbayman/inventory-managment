import { CiSquareMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../context/GlobalContext";
import useFetch from "./CRUD/useFetch";
import useDelete from "./CRUD/useDelete";

const Sales = () => {
  const [toggle, setToggle] = useState({});
  const { setEditeStates, searchedResults, soldImgUrls } =
    useContext(InventoryContext);

  const { fetchSales, isPending } = useFetch();
  const { deleteSales } = useDelete();

  const toggleFunction = (id) => {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  };

  let results = [];
  let keysArr;
  for (let i = 0; i < fetchSales.length; i++) {
    keysArr = Object.keys(fetchSales[i]);
    for (let j = 0; j < keysArr.length; j++) {
      results.push(fetchSales[i][keysArr[j]]);
    }
  }

  const getSoldProductById = (index) => {
    let specificData = results?.filter((data, i) => i === index);
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

  let theMainContent = searchedResults?.length ? searchedResults : results;

  if (isPending) return <p>Loading...</p>;

  return (
    <div className="mx-4">
      <div className="comp-head my-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Sold Products</h1>
        <Link to="/s/sales/soldProduct">
          <button className="shadow-lg shadow-indigo-500/50 ms-auto px-2 py-2 border-2 border-cyan-700 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white  font-semibold flex items-center rounded-md gap-2">
            <span>
              <FaPlus />
            </span>
            <span className="sm:block hidden">Add To Sales</span>
          </button>
        </Link>
      </div>
      <div className="scroll-container border-2 rounded-md border-slate-300 min-h-64 my-6   ">
        <ul
          className="scroll-child p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-slate-300 "
          style={{
            gridTemplateColumns: "repeat(8, minmax(60px, 1fr))",
          }}
        >
          <li className="border-e-2 border-slate-300 text-left my-auto">#</li>
          <li className="my-auto">Product Name</li>
          <li className="my-auto">Product Image</li>
          <li className="my-auto">Product Quantity</li>
          <li className="my-auto">Product Price</li>
          <li className="my-auto">Company Name</li>
          <li className="my-auto">Date</li>
          <li className="my-auto">Action</li>
        </ul>

        {theMainContent
          ?.map((data, index) => (
            <ul
              className="scroll-child p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-slate-300 "
              style={{
                gridTemplateColumns: "repeat(8, minmax(60px, 1fr))",
              }}
              key={index}
            >
              <li className="border-e-2 border-slate-300 text-left my-auto">
                {data.soldProductID}
              </li>
              <li className="my-auto ">{data.soldProductName}</li>
              <li>
                <img
                  src={data.soldProductImgUrl}
                  alt=""
                  className="w-10 h-10 rounded-full my-auto"
                />
              </li>
              <li className="my-auto">{data.soldProductQuantity}</li>
              <li className="my-auto">{data.soldProductPrice}</li>
              <li className="my-auto">{data.soldCompanyName}</li>
              <li className="my-auto">{data.soldDate}</li>
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
                  <Link to={`/s/sales/editeProduct/${data.soldFireID}`}>
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
                    onClick={() => deleteSales(data, index)}
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
