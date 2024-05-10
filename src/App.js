import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Products from "./components/Products";
import Sales from "./components/Sales";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import Settings from "./components/Settings";
import { useContext } from "react";
import { InventoryContext } from "./context/GlobalContext";

function App() {
  const { sideBarToggle } = useContext(InventoryContext);
  return (
    <div className="App  flex">
      <div
        className={sideBarToggle ? "w-1/5 " : "w-20 "}
        style={{ transition: "all 0.3s" }}
      >
        <Sidebar />
      </div>
      <main
        className="w-full
      "
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/addProduct" element={<AddProduct />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/addSale" element={<AddProduct />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
