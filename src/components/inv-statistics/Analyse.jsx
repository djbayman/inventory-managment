import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GiExpense } from "react-icons/gi";
import useFetch from "../CRUD/useFetch";
import { FaWallet } from "react-icons/fa";

const Analyse = () => {
  let total = 0;
  const { fetchPurchases, fetchSales } = useFetch();
  //
  let keysArr;
  for (let i = 0; i < fetchSales.length; i++) {
    keysArr = Object.keys(fetchSales[i]);
    for (let j = 0; j < keysArr.length; j++) {
      total += fetchSales[i][keysArr[j]].soldProductPrice;
    }
  }
  //
  let expense = 0;
  for (let i = 0; i < fetchPurchases.length; i++) {
    expense += fetchPurchases[i]?.productPrice;
  }

  return (
    <div className="flex items-center gap-4 mx-8 my-6">
      <div className="w-1/3 bg-zinc-100 rounded-md shadow px-8 py-4 min-h-28 hover:bg-emerald-200 transition-colors">
        <p className=" font-semibold text-gray-400 flex items-center justify-between">
          Revenue
          <span className="ms-auto text-emerald-800 text-xl bg-emerald-200 rounded p-1">
            <AiOutlineDollarCircle />
          </span>
        </p>
        <h2 className="mt-4 font-semibold">$ {total}</h2>
      </div>
      <div className="w-1/3 bg-zinc-100 rounded-md shadow px-8 py-4 min-h-28 hover:bg-orange-200 transition-colors">
        <p className=" font-semibold text-gray-400 flex items-center justify-between">
          Expense
          <span className="ms-auto text-orange-800 bg-orange-200 p-1 rounded text-xl">
            <GiExpense />
          </span>
        </p>
        <h2 className="mt-4 font-semibold">$ {expense}</h2>
      </div>
      <div className="w-1/3 bg-zinc-100 rounded-md shadow px-8 py-4 min-h-28 hover:bg-yellow-200 transition-colors">
        <p className=" font-semibold text-gray-400 flex items-center justify-between">
          Intrest
          <span className="ms-auto text-yellow-600 bg-yellow-200 rounded p-1 text-xl">
            <FaWallet />
          </span>
        </p>
        <h2 className="mt-4 font-semibold">$ {total - expense}</h2>
      </div>
    </div>
  );
};

export default Analyse;
