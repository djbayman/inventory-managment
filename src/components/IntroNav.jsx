import { Link } from "react-router-dom";
import logo from "../assets/download.png";

const IntroNav = () => {
  return (
    <nav className="flex items-center justify-between  bg-cyan-800 text-white px-10">
      <Link to="/">
        <div className="logo  flex items-center p-4 gap-4">
          <img src={logo} alt="" className={`w-w-10 h-10 xl:m-0`} />
          <div>
            <h1 className=" text-lg font-bold">Inventory</h1>
            <h2 className="text-sm font-medium">Mangment System</h2>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default IntroNav;
