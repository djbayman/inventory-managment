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
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

function App() {
  // const { sideBarToggle } = useContext(InventoryContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s/*" element={<Layout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
