import { Route, Routes, Outlet } from "react-router-dom";
import { useContext } from "react";
import "../App.css";
import { InventoryContext } from "../context/GlobalContext";

import Purchases from "./Purchases";
import Sales from "./Sales";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AddProduct from "./add/AddProduct";
import Settings from "./Settings";
import EditProduct from "./edite/EditProduct";
import SaleProduct from "./sold/SaleProduct";
import Dashboard from "./Dashboard";
import NoMatch from "./NoMatch";

const Layout = () => {
  const { sideBarToggle } = useContext(InventoryContext);

  return (
    <div className="flex">
      <aside
        className={sideBarToggle ? "w-1/6 min-w-min" : " w-14 "}
        style={{ transition: "all 0.5s ease-out allow-discrete" }}
      >
        <Sidebar />
      </aside>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="/purchases/addProduct" element={<AddProduct />} />
          <Route
            path="/purchases/editeProduct/:index"
            element={<EditProduct />}
          />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/soldProduct" element={<SaleProduct />} />
          <Route path="/sales/editeProduct/:index" element={<EditProduct />} />
          <Route path="/settings" element={<Settings />} />
          {/* <Route path="/*" element={<Settings />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
