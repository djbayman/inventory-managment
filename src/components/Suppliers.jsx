import React, { useContext } from "react";
import { InventoryContext } from "../context/GlobalContext";

const Suppliers = () => {
  const { fetchedData, fetchedSoldData } = useContext(InventoryContext);

  let suppliersIds = [];
  let suppliersNames = fetchedData?.map((sup) => {
    suppliersIds.push(sup.supplierID);
    return sup.supplierName;
  });

  let clientsIds = [];
  let clientsNames = fetchedSoldData?.map((cli) => {
    clientsIds.push(cli.soldProductClientID);
    return cli.soldProductClientName;
  });

  return (
    <div className="flex justify-between flex-wrap gap-10 m-6">
      <div className="w-5/12 bg-teal-100 p-3 rounded-md  border-2 border-cyan-900 min-h-40">
        <ul
          className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-cyan-900 text-left my-auto min-h-10"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <li className=" text-left my-auto">Supplier ID</li>
          <li className=" ">Supplier Name</li>
        </ul>
        {suppliersNames?.map((supp, index) => (
          <ul
            className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-cyan-900 text-left my-auto min-h-10"
            style={{
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <li className=" text-left my-auto ">{suppliersIds[index]}</li>
            <li className=" ">{suppliersNames[index]}</li>
          </ul>
        ))}
      </div>
      <div className="w-5/12 bg-teal-100 p-3 rounded-md  border-2 border-cyan-900 min-h-40">
        <ul
          className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-cyan-900 text-left my-auto min-h-10"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <li className=" text-left my-auto">Client ID</li>
          <li className=" ">Client Name</li>
        </ul>
        {clientsNames?.map((cli, index) => (
          <ul
            className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-cyan-900 text-left my-auto min-h-10"
            style={{
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <li className=" text-left my-auto ">{clientsIds[index]}</li>
            <li className=" ">{cli}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
