import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { InventoryContext } from "../context/GlobalContext";

const Navbar = () => {
  const { sideBarToggle, setSideBarToggle } = useContext(InventoryContext);
  return (
    <div className="w-full flex items-center justify-between p-6 shadow-md ">
      <div className="flex gap-4 items-center">
        <FaArrowLeft
          className={
            sideBarToggle
              ? "cursor-pointer text-xl mt-2 transition-transform hover:bg-slate-200 w-10 h-10 p-2 rounded-md hover:text-cyan-800"
              : "cursor-pointer text-xl mt-2 transition-transform hover:bg-slate-200 w-10 h-10 p-2 rounded-md hover:text-cyan-800 rotate-180"
          }
          onClick={() => setSideBarToggle(!sideBarToggle)}
        />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="details flex items-center gap-2">
        <div>
          <p className="text-gray-500 text-lg">The name</p>
          <span className="text-gray-500 text-lg">The Date</span>
        </div>
        <img
          src=""
          alt=""
          className="w-10 h-10 rounded-full border-2 border-gray-800"
        />
      </div>
    </div>
  );
};

export default Navbar;
