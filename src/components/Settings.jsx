import { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import icon from "../assets/219986.png";

const Settings = () => {
  const [lableDisplay, setLableDisplay] = useState(false);

  return (
    <div className="m-6">
      <div className="comp-head my-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="text-slate-500">Manage Your Profile Here</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="my-10 relative">
          <img
            src={icon}
            alt=""
            className="w-40 h-40 border-2 border-cyan-900 rounded-full"
          />
          <RiPencilFill className="absolute bottom-0 right-3 text-4xl p-1 bg-white rounded-full cursor-pointer hover:text-cyan-800" />
        </div>
        <form className="w-1/3">
          {/* <label className="relative">
            <span
              className={
                lableDisplay
                  ? "absolute  w-24  text-center text-cyan-600 font-semibold text-lg z-10 bg-white p-1 transition-all"
                  : "hidden "
              }
              style={{ top: "-20px", left: "15px" }}
            >
              your name
            </span>
          </label> */}
          <input
            type="text"
            placeholder="your name"
            className="mb-10 block w-full border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-4 focus:border-cyan-600 transition-colors"
            onFocus={() => setLableDisplay(true)}
            onBlur={() => setLableDisplay(false)}
          />
          {/* <label className="relative  ">
            <span
              className={
                lableDisplay
                  ? "absolute  w-24  text-center text-cyan-600 font-semibold text-lg z-10 bg-white p-1 transition-all"
                  : "hidden "
              }
              style={{ top: "-20px", left: "15px" }}
            >
              your email
            </span>
          </label> */}
          <input
            type="email"
            placeholder="your email"
            className="mb-10 block w-full border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-4 focus:border-cyan-600 transition-colors"
            onFocus={() => setLableDisplay(true)}
            onBlur={() => setLableDisplay(false)}
          />
          {/* <label className="relative  ">
            <span
              className={
                lableDisplay
                  ? "absolute  w-24  text-center text-cyan-600 font-semibold text-lg z-10 bg-white p-1 transition-all"
                  : "hidden "
              }
              style={{ top: "-20px", left: "15px" }}
            >
              your password
            </span>
          </label> */}
          <input
            type="text"
            placeholder="your password"
            className="mb-10 block w-full border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-4 focus:border-cyan-600 transition-colors"
            onFocus={() => setLableDisplay(true)}
            onBlur={() => setLableDisplay(false)}
          />
          <div className="">
            <button className="block  w-full  bg-cyan-800 text-xl font-bold text-white px-6 py-2 rounded hover:bg-slate-400 hover:text-black transition-colors">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
