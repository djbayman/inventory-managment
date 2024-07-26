import { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { InventoryContext } from "../context/GlobalContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation().pathname;
  const {
    sideBarToggle,
    setSideBarToggle,
    fetchedData,
    setSearchedResults,
    fetchedSoldData,
  } = useContext(InventoryContext);

  useEffect(() => {
    setSearchedResults([]);
    if (location.includes("purchases") && searchValue !== "") {
      const searchProduct = () => {
        let searchResult = fetchedData?.filter((product) =>
          product?.productName.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (searchResult?.length) {
          setSearchedResults(searchResult);
        }
      };
      searchProduct(fetchedData);
    } else if (location.includes("sales") && searchValue !== "") {
      const searchProduct = () => {
        let searchResult = fetchedSoldData?.filter((product) =>
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
  }, [searchValue, fetchedData, location, fetchedSoldData, setSearchedResults]);

  return (
    <div className="flex items-center justify-between p-4 shadow-md ">
      <div className="flex items-center">
        <FaArrowLeft
          className={`text-cyan-900 cursor-pointer transition-transform  w-6    rounded-md hover:text-cyan-800 ${
            sideBarToggle ? "" : "rotate-180"
          }`}
          onClick={() => setSideBarToggle(!sideBarToggle)}
        />
        <h1 className="text-xl font-bold ps-2">Dashboard</h1>
      </div>
      <div className="details flex w-60">
        <input
          type="text"
          placeholder="Search for product by it's name"
          className="w-full bg-gray-200 text-cyan-900 border-y-2 border-2 border-gray-500  ps-2 py-1 text-sm rounded-lg outline-none "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
