import logo from "../assets/download.png";
import icon from "../assets/438089354_957421755750130_9050087029746523769_n.jpg";
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { FaShapes } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { InventoryContext } from "../context/GlobalContext";

const Sidebar = () => {
  const { sideBarToggle } = useContext(InventoryContext);

  return (
    <div className="sticky top-0 " style={{ transition: "all linear 0.5s" }}>
      <div className="bg-cyan-900 text-white py-6 px-2 h-screen">
        <Link to="/">
          <div className="logo xl:flex items-center text-center xl:text-left  gap-2 ">
            <img
              src={logo}
              alt=""
              className={`w-w-10 h-10 xl:m-0 ${
                sideBarToggle ? "mx-auto" : "m-0"
              }`}
            />
            <div className={sideBarToggle ? "block" : "hidden"}>
              <h1 className=" text-lg font-bold">Inventory</h1>
              <h2 className="text-sm font-medium">Mangment System</h2>
            </div>
          </div>
        </Link>
        <div
          className=" flex flex-col justify-between"
          style={{ height: "84%" }}
        >
          <div className="nav-links">
            <ul className="mt-10 ">
              <NavLink to="/">
                {({ isActive }) => (
                  <li
                    className={`flex items-center gap-4 text-lg font-semibold p-2  mb-3 rounded-md hover:bg-cyan-950 transition-colors ${
                      isActive ? "bg-cyan-950" : " "
                    }`}
                  >
                    <span className="text-cyan-500">
                      <MdDashboard />
                    </span>
                    {sideBarToggle && "Dashboard"}
                  </li>
                )}
              </NavLink>
              <NavLink to="/purchases">
                {({ isActive }) => (
                  <li
                    className={`flex items-center gap-4 text-lg  font-semibold p-2  mb-3 rounded-md hover:bg-cyan-950 transition-colors ${
                      isActive ? "bg-cyan-950" : " "
                    }`}
                  >
                    <span className="text-cyan-500">
                      <FaShapes />
                    </span>
                    {sideBarToggle && "Purchases"}
                  </li>
                )}
              </NavLink>
              <NavLink to="/sales">
                {({ isActive }) => (
                  <li
                    className={`flex items-center gap-4 text-lg  font-semibold p-2  mb-3 rounded-md hover:bg-cyan-950 transition-colors ${
                      isActive ? "bg-cyan-950" : " "
                    }`}
                  >
                    <span className="text-cyan-500">
                      <FaListCheck />
                    </span>
                    {sideBarToggle && "Sales"}
                  </li>
                )}
              </NavLink>
              <NavLink to="/settings">
                {({ isActive }) => (
                  <li
                    className={`flex items-center gap-4 text-lg  font-semibold p-2  mb-6 rounded-md hover:bg-cyan-950 transition-colors ${
                      isActive ? "bg-cyan-950" : " "
                    }`}
                  >
                    <span className="text-cyan-500">
                      <FiSettings />
                    </span>
                    {sideBarToggle && "Settings"}
                  </li>
                )}
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={icon}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-gray-800"
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
                  ? "flex items-center justify-center gap-6  w-36 rounded bg-cyan-500 p-2 text-lg font-bold text-white  hover:bg-cyan-600 transition-all"
                  : "w-10 h-10 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all"
              }
            >
              {sideBarToggle && <span>Logout</span>}
              <MdOutlineLogout
                className={
                  sideBarToggle ? "text-lg ms-auto" : "mx-auto text-2xl"
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
