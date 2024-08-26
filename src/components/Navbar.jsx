import { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { InventoryContext } from "../context/GlobalContext";
import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import useFetch from "./CRUD/useFetch";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation().pathname;
  const { sideBarToggle, setSideBarToggle, setSearchedResults } =
    useContext(InventoryContext);

  const { fetchPurchases, fetchSales } = useFetch();
  let data = [];
  let keysArr;
  for (let i = 0; i < fetchSales.length; i++) {
    keysArr = Object.keys(fetchSales[i]);
    for (let j = 0; j < keysArr.length; j++) {
      data.push(fetchSales[i][keysArr[j]]);
    }
  }

  useEffect(() => {
    setSearchedResults([]);
    if (location.includes("purchases") && searchValue !== "") {
      const searchProduct = () => {
        let searchResult = fetchPurchases?.filter((product) =>
          product?.productName.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (searchResult?.length) {
          setSearchedResults(searchResult);
        }
      };
      searchProduct();
    } else if (location.includes("sales") && searchValue !== "") {
      const searchProduct = () => {
        let searchResult = data?.filter((product) =>
          product?.soldProductName
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
        if (searchResult?.length) {
          setSearchedResults(searchResult);
        }
      };
      searchProduct();
    }
  }, [searchValue, fetchPurchases, location, setSearchedResults]);

  let searchDisplay = false;
  if (location.includes("purchases") || location.includes("sales"))
    searchDisplay = true;

  return (
    <div className="flex items-center justify-between px-2 py-4 shadow-md ">
      <div className="flex items-center">
        <FaArrowLeft
          className={`text-cyan-900 cursor-pointer transition-transform  w-6    rounded-md hover:text-cyan-800 ${
            sideBarToggle ? "" : "rotate-180"
          }`}
          onClick={() => setSideBarToggle(!sideBarToggle)}
        />
        <h1 className="text-xl font-bold ps-2">
          {location.slice(3, 4).toLocaleUpperCase() + location.slice(4)}
        </h1>
      </div>
      {searchDisplay && (
        <div className="details flex w-32 sm:w-60 relative">
          <input
            type="text"
            placeholder="Search for product by it's name"
            className=" w-full font-semibold bg-gray-200 text-cyan-900 border-y-2 border-2 border-gray-500 text-sm  ps-2 py-1  rounded-lg outline-none "
            // style={{ fontSize: "8px" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <FaSearch className="absolute text-cyan-800 top-2 right-2" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
