import React from "react";
import Suppliers from "./Suppliers";

const Dashboard = () => {
  return (
    <>
      <div className="text-right bg-cyan-700 p-3 w-72 text-white font-semibold mx-auto rounded-lg">
        <p>هنا راح يكون تحليل لكامل المخزون</p>
        <p>مثلا راح ندير اكثر منتوج تباع</p>
        <p>أكثر منتوج تشرا </p>
        <p>رقم الأعمال ....</p>
      </div>
      <Suppliers />
    </>
  );
};

export default Dashboard;
