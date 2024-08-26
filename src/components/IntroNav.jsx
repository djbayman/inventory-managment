import { Link, useLocation } from "react-router-dom";
import logo from "../assets/download.png";

const IntroNav = () => {
  const location = useLocation();
  return (
    <nav className="flex  items-center justify-between  bg-cyan-800 text-white px-4">
      <Link to="/">
        <div className="logo  flex items-center py-4 gap-4">
          <img src={logo} alt="" className={`w-10 h-10 xl:m-0`} />
          <div>
            <h1 className="text-lg font-bold">Inventory</h1>
            <h2 className="text-sm font-medium">Mangment System</h2>
          </div>
        </div>
      </Link>

      {location.pathname.includes("register") ||
      location.pathname.includes("login") ? (
        ""
      ) : (
        <div className="text-black flex items-center gap-3">
          <Link to="/login">
            <button className="w-20 bg-white px-2 py-1 text-cyan-900 font-semibold rounded-md shadow-xl hover:bg-cyan-500 hover:text-white transition-colors">
              Sgin In
            </button>
          </Link>
          <Link to="/register">
            <button className="w-20 bg-cyan-500 text-white px-2 py-1 font-semibold rounded-md shadow-xl hover:bg-white hover:text-cyan-900 transition-colors">
              Sgin Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default IntroNav;
