import logo from "../assets/download.png";
import icon from "../assets/219986.png";
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { FaShapes } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { InventoryContext } from "../context/GlobalContext";

const Sidebar = () => {
  const { sideBarToggle } = useContext(InventoryContext);

  return (
    <div className="sticky top-0 ">
      <div className="bg-cyan-900 text-white py-6 px-4 h-screen  ">
        <Link to="/">
          <div className="logo flex items-center justify-center gap-2">
            <img src={logo} alt="" className="w-14 h-14" />
            {sideBarToggle && (
              <div>
                <h1 className="text-2xl font-bold">Inventory</h1>
                <h2 className="text-lg font-semibold">Mangment System</h2>
              </div>
            )}
          </div>
        </Link>
        <div
          className=" flex flex-col justify-between  items-center"
          style={{ height: "89%" }}
        >
          <div className="nav-links">
            <ul className="my-10 ">
              <Link to="/">
                <li className="flex items-center gap-4 text-xl  font-semibold px-3 py-3  mb-6 rounded-md hover:bg-cyan-950">
                  <span className="text-cyan-500 text-2xl">
                    <MdDashboard />
                  </span>
                  {sideBarToggle && "Dashboard"}
                </li>
              </Link>
              <Link to="/purchases">
                <li className="flex items-center gap-4 text-2xl  font-semibold px-3 py-3  mb-6 rounded-md hover:bg-cyan-950">
                  <span className="text-cyan-500">
                    <FaShapes />
                  </span>
                  {sideBarToggle && "Purchases"}
                </li>
              </Link>
              <Link to="/sales">
                <li className="flex items-center gap-4 text-2xl  font-semibold px-3 py-3  mb-6 rounded-md hover:bg-cyan-950">
                  <span className="text-cyan-500">
                    <FaListCheck />
                  </span>
                  {sideBarToggle && "Sales"}
                </li>
              </Link>
              <Link to="/settings">
                <li className="flex items-center gap-4 text-2xl  font-semibold px-3 py-3  mb-6 rounded-md hover:bg-cyan-950">
                  <span className="text-cyan-500">
                    <FiSettings />
                  </span>
                  {sideBarToggle && "Settings"}
                </li>
              </Link>
              <Link to="/documents">
                <li className="flex items-center gap-4 text-2xl  font-semibold px-3 py-3  mb-6 rounded-md hover:bg-cyan-950">
                  <span className="text-cyan-500">
                    <FaFolderOpen />
                  </span>
                  {sideBarToggle && "Documents"}
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={icon}
                alt=""
                className="w-12 h-12 rounded-full border-2 border-gray-800"
              />
              {sideBarToggle && (
                <div>
                  <p className="font-semibold text-slate-300">The Name</p>
                  <span className="text-sm text-slate-100">email</span>
                </div>
              )}
            </div>
            <button
              className={
                sideBarToggle
                  ? "flex items-center justify-center gap-6  w-40 rounded bg-cyan-500 px-4 py-2 text-xl font-bold text-white  hover:bg-cyan-600 transition-all"
                  : "w-12 h-12 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all"
              }
            >
              {sideBarToggle && <span>Logout</span>}
              <MdOutlineLogout className="text-2xl mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
