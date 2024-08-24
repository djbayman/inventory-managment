import { Link } from "react-router-dom";
import logo from "../assets/download.png";
import introImg from "../assets/InventoryManagement_Hero@3x.png";

const Home = () => {
  return (
    <section className="bg-zinc-200 h-screen">
      <nav className="flex items-center justify-between  bg-cyan-800 text-white px-10">
        <div className="logo  flex items-center p-4 gap-4">
          <img src={logo} alt="" className={`w-w-10 h-10 xl:m-0`} />
          <div>
            <h1 className=" text-lg font-bold">Inventory</h1>
            <h2 className="text-sm font-medium">Mangment System</h2>
          </div>
        </div>
        <div className="text-black flex items-center gap-3">
          <Link to="/login">
            <button className="w-24 bg-white px-3 py-1 text-cyan-900 font-semibold rounded-md shadow-xl hover:bg-cyan-500 hover:text-white transition-colors">
              Sgin In
            </button>
          </Link>
          <Link to="/register">
            <button className="w-24 bg-cyan-500 text-white px-3 py-1 font-semibold rounded-md shadow-xl hover:bg-white hover:text-cyan-900 transition-colors">
              Sgin Up
            </button>
          </Link>
        </div>
      </nav>
      <main className="flex items-center gap-10 justify-around my-20">
        <div className="w-1/2 text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Invontory Managment System
          </h1>
          <p className="">
            Invontory Managment System (IMS) is an integrated software program
            desgined to track products purchases, sales and fulfilment both to
            and from customers, as well as suppliers. it halpes merchants track
            products along the supply chain
          </p>
        </div>
        <div className="" style={{ width: "430px" }}>
          <img className="" src={introImg} alt="" />
        </div>
      </main>
    </section>
  );
};

export default Home;
