import { Link } from "react-router-dom";
import logo from "../assets/download.png";
import introImg from "../assets/InventoryManagement_Hero@3x.png";
import IntroNav from "../components/IntroNav";

const Home = () => {
  return (
    <section className="bg-zinc-200 h-screen">
      <IntroNav />
      <main className="flex flex-col sm:flex-row items-center gap-10  my-20 bg-zinc-200">
        <div className="sm:w-1/2 text-center">
          <h1 className="text-2xl font-semibold mb-4">
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
