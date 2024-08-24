import { useEffect, useState } from "react";
import useFetch from "./CRUD/useFetch";
import { FaSearch } from "react-icons/fa";

const Suppliers = () => {
  const [supplierSearch, setSupplierSearch] = useState("");
  const [supplierResutl, setSupplierResult] = useState([]);
  const [clientSearch, setClientSearch] = useState("");
  const [clientSearchResult, setClientSearchResult] = useState([]);
  const { fetchPurchases, fetchSales } = useFetch();
  let listClient = [];
  let keysArr;

  for (let i = 0; i < fetchSales.length; i++) {
    keysArr = Object.keys(fetchSales[i]);
    for (let j = 0; j < keysArr.length; j++) {
      listClient.push(fetchSales[i][keysArr[j]]);
    }
  }

  useEffect(() => {
    let searchResult = fetchPurchases?.filter((product) =>
      product?.supplierName.toLowerCase().includes(supplierSearch.toLowerCase())
    );
    if (searchResult?.length) {
      setSupplierResult(searchResult);
    }
    //
    let clientSearchResult = listClient?.filter((product) =>
      product?.soldProductClientName
        .toLowerCase()
        .includes(clientSearch.toLowerCase())
    );
    if (clientSearchResult.length) {
      setClientSearchResult(clientSearchResult);
    }
  }, [supplierSearch, fetchPurchases, fetchSales, clientSearch]);

  return (
    <div className="flex flex-col justify-between gap-3 m-6 ">
      <div className=" bg-zinc-100 p-3 rounded-md  border-2 border-gray-300 min-h-56 ">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-semibold">List of Suppliers</h1>
          <div className="details flex w-48 relative">
            <input
              type="text"
              placeholder="Search for supplier"
              className=" w-full font-semibold bg-gray-200 text-cyan-900 border-y-2 border-2 border-gray-500  ps-2 py-1 text-sm rounded-lg outline-none "
              value={supplierSearch}
              onChange={(e) => setSupplierSearch(e.target.value)}
            />
            <FaSearch className="absolute text-cyan-800 top-2 right-2" />
          </div>
        </div>
        <ul
          className="font-bold p-2 text-gray-900 grid gap-4  border-b-2 border-zinc-500 text-left my-auto min-h-10 "
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "10px",
          }}
        >
          <li className=" text-left my-auto">Supplier ID</li>
          <li className="my-auto ">Supplier Name</li>
          <li className="my-auto ">Supplier Email</li>
          <li className="my-auto ">Supplier Phone Number</li>
        </ul>
        {supplierResutl?.map((data, index) => (
          <ul
            className=" p-2 text-zinc-900 text-sm grid gap-4  border-b-2 border-zinc-500 text-left my-auto min-h-10 rounded-md hover:bg-zinc-200 transition-colors"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              fontSize: "10px",
            }}
            key={index}
          >
            <li className=" text-left my-auto ">{data.supplierID}</li>
            <li className="my-auto ">{data.supplierName}</li>
            <li className="my-auto ">{data.supplierEmail}</li>
            <li className="my-auto ">{data.supplierPhone}</li>
          </ul>
        ))}
      </div>
      <div className=" bg-zinc-100 p-3 rounded-md  border-2 border-gray-300 min-h-56">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-semibold">List of Clients</h1>
          <div className="details flex w-48 relative">
            <input
              type="text"
              placeholder="Search for client"
              className=" w-full font-semibold bg-gray-200 text-cyan-900 border-y-2 border-2 border-gray-500  ps-2 py-1 text-sm rounded-lg outline-none "
              value={clientSearch}
              onChange={(e) => setClientSearch(e.target.value)}
            />
            <FaSearch className="absolute text-cyan-800 top-2 right-2" />
          </div>
        </div>
        <ul
          className="font-bold p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-zinc-500 text-left my-auto min-h-10"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "10px",
          }}
        >
          <li className="text-left my-auto">Client ID</li>
          <li className="my-auto">Client Name</li>
          <li className="my-auto">Client Email</li>
          <li className="my-auto">Client Phone Number</li>
        </ul>
        {clientSearchResult?.map((cli, index) => (
          <ul
            className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-zinc-500 text-left my-auto min-h-10 rounded-md hover:bg-zinc-200 transition-colors "
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              fontSize: "10px",
            }}
            key={index}
          >
            <li className=" text-left my-auto ">{cli.soldProductClientID}</li>
            <li className=" my-auto">{cli.soldProductClientName}</li>
            <li className="my-auto ">{cli.soldProductClientEmail}</li>
            <li className="my-auto ">{cli.soldProductClientPhone}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
