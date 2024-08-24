import logo from "../assets/download.png";
import { MdDashboard } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { FaShapes } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../context/GlobalContext";
import { auth } from "../firebaseConfig";
import useFetch from "./CRUD/useFetch";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { IoMdPerson } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { sideBarToggle, setSideBarToggle } = useContext(InventoryContext);
  const { userValues } = useFetch();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (width <= 920) {
      setSideBarToggle(false);
    } else {
      setSideBarToggle(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, setSideBarToggle]);

  async function handleLogout() {
    try {
      setIsLoading(true);
      await auth.signOut();
      toast.success("your logout successfully", {
        position: "bottom-center",
        autoClose: 2000,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <Loading />;

  return (
    <div className="sticky top-0 " style={{ transition: "all linear 0.5s" }}>
      <div className="bg-cyan-900 text-white py-6 px-2 h-screen">
        <Link to="/s/dashboard">
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
              <NavLink to="/s/dashboard">
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
              <NavLink to="/s/purchases">
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
              <NavLink to="/s/sales">
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
              <NavLink to="/s/list">
                {({ isActive }) => (
                  <li
                    className={`flex items-center gap-4 text-lg  font-semibold p-2  mb-3 rounded-md hover:bg-cyan-950 transition-colors ${
                      isActive ? "bg-cyan-950" : " "
                    }`}
                  >
                    <span className="text-cyan-500">
                      <IoMdPerson />
                    </span>
                    {sideBarToggle && "List"}
                  </li>
                )}
              </NavLink>
              <NavLink to="/s/settings">
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
                src={userValues?.photo}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-gray-800"
              />
              {sideBarToggle && (
                <div>
                  <p className="font-semibold text-slate-300">
                    {userValues?.firstName + " " + userValues?.lastName}
                  </p>
                  <span
                    className=" text-slate-100 "
                    style={{ fontSize: "8px" }}
                  >
                    {userValues?.email}
                  </span>
                </div>
              )}
            </div>
            <button
              className={
                sideBarToggle
                  ? "flex items-center justify-center gap-6  w-36 rounded bg-cyan-500 p-2 text-lg font-bold text-white  hover:bg-cyan-600 transition-all"
                  : "w-10 h-10 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition-all"
              }
              onClick={handleLogout}
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
