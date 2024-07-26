import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Purchases from "./components/Purchases";
import Sales from "./components/Sales";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddProduct from "./components/add/AddProduct";
import Settings from "./components/Settings";
import { useContext } from "react";
import { InventoryContext } from "./context/GlobalContext";
import EditProduct from "./components/edite/EditProduct";
import SaleProduct from "./components/sold/SaleProduct";

function App() {
  const { sideBarToggle } = useContext(InventoryContext);
  return (
    <div className="App  flex">
      <div
        className={sideBarToggle ? "w-1/6 min-w-min" : "w-14"}
        style={{ transition: "all 0.5s ease-out allow-discrete" }}
      >
        <Sidebar />
      </div>
      <main className="w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
