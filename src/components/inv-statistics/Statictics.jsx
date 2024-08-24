import { useEffect } from "react";
import useFetch from "../CRUD/useFetch";
import { FaSearch } from "react-icons/fa";

const Statictics = () => {
  let quantity = [];
  let prdName = [];
  let invLeft = [];

  const { fetchOP } = useFetch();

  for (let key in fetchOP[0]) {
    invLeft.push(fetchOP[0][key]);
    quantity.push(fetchOP[0][key].opProductQuantity);
    prdName.push(fetchOP[0][key].opProductName);
  }

  return (
    <div className="flex items-start justify-between gap-10 m-6">
      <div style={{ width: "100%" }}>
        <div className=" bg-zinc-100 p-3 rounded-md  border-2 border-gray-300 min-h-40">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-semibold">List of Products</h1>
            <div className="details flex w-48 relative">
              <input
                type="text"
                placeholder="Search for product"
                className=" w-full font-semibold bg-gray-200 text-cyan-900 border-y-2 border-2 border-gray-500  ps-2 py-1 text-sm rounded-lg outline-none "
                // value={clientSearch}
                // onChange={(e) => setClientSearch(e.target.value)}
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
            <li className="my-auto">product Name</li>
            <li className="my-auto">quantity left</li>
            <li className="my-auto">supplier Name</li>
            <li className="my-auto">supplier Contact</li>
          </ul>
          {invLeft.map((prd, ind) => (
            <ul
              className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-zinc-500 text-left my-auto min-h-10 rounded-md hover:bg-zinc-200 transition-colors "
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                fontSize: "10px",
              }}
              key={ind}
            >
              <li className="my-auto">{prd.opProductName}</li>
              <li className="my-auto">{prd.opProductQuantity}</li>
              <li className="my-auto">{prd.opSupplierName}</li>
              <li className="my-auto">{prd.opSupplierPhone}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statictics;
