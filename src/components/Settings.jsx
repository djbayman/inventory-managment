import { useContext, useRef, useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import icon from "../assets/438089354_957421755750130_9050087029746523769_n.jpg";
import { InventoryContext } from "../context/GlobalContext";
import Girl from "./Girl";
// import { Girl } from "../components/Girl";

const Settings = () => {
  const [lableDisplay, setLableDisplay] = useState(false);
  const { userName, userEmail, userPassword, setUserState } =
    useContext(InventoryContext);

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="mx-4" style={{ height: "2000px" }}>
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">
          Mange Your Profile here pretty 🥀
        </h1>
        <p className="text-slate-500">😆 ماتتحمسيش مزال مرهش يمشي </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 relative">
          <img
            src={icon}
            alt=""
            className="w-36 h-36 border-2 border-cyan-900 rounded-full"
          />
          <RiPencilFill className="absolute bottom-0 right-3 text-4xl p-1 bg-white rounded-full cursor-pointer hover:text-cyan-800" />
        </div>
        <form className="w-1/3">
          <label className="relative ">
            {/* <span
              className={
                "absolute w-24 text-center text-cyan-900 font-semibold text-lg z-10 bg-white p-1"
              }
              style={{
                top: lableDisplay ? "-20px" : "9px",
                left: "9px",
              }}
            >
              your name
            </span> */}
            <input
              type="text"
              placeholder="your name"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              onFocus={() => setLableDisplay(true)}
              onBlur={() => setLableDisplay(false)}
              value={userName}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
            />
          </label>
          <label className="relative ">
            {/* <span
              className={
                "absolute w-24 text-center text-cyan-900 font-semibold text-lg z-10 bg-white p-1"
              }
              style={{
                top: lableDisplay ? "-20px" : "9px",
                left: "9px",
              }}
            >
              your email
            </span> */}
            <input
              type="email"
              placeholder="your email"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              onFocus={() => setLableDisplay(true)}
              onBlur={() => setLableDisplay(false)}
              value={userEmail}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userEmail: e.target.value,
                }))
              }
            />
          </label>
          <label className="relative ">
            {/* <span
              className={
                "absolute w-38  text-cyan-900 font-semibold text-lg z-10 bg-white p-1 pe-3"
              }
              style={{
                top: lableDisplay ? "-20px" : "9px",
                left: "9px",
              }}
            >
              your password
            </span> */}
            <input
              type="password"
              placeholder="your password"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              onFocus={() => setLableDisplay(true)}
              onBlur={() => setLableDisplay(false)}
              value={userPassword}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userPassword: e.target.value,
                }))
              }
            />
          </label>
          <div className="">
            <button className="block w-full  bg-cyan-800 text-lg font-bold text-white px-3 py-2 rounded hover:bg-slate-400 hover:text-black transition-colors">
              Save Changes
            </button>
          </div>
        </form>
        <div>
          <p>Note: This page only for Charming girl ❤️💚</p>
        </div>
      </div>

      {/* hna hadeel */}
      <div
        className="w-60 bg-teal-700	rounded-md ms-auto text-center "
        style={{ scrollBehavior: "smooth" }}
        onClick={() => executeScroll()}
      >
        <p className="font-semibold text-lg text-white">
          Click me تحبي نحكيلك حكاية{" "}
        </p>
      </div>
      <div style={{ height: "400px" }}></div>
      <div ref={myRef}>
        <div className="mx-auto mb-4 rounded-lg text-right text-white w-fit bg-teal-700 p-3">
          <h1>تعرفي علاش حبيت نحكي معاك ؟</h1>
          <p>
            في بودواو كان عندي وحد لبلاصة ديما نروح نريح فيها نتخلوا معا روحي
            ونخمم جاية بلاصة شابة
          </p>
          <p> لعام هادا مارحتش كامل </p>
          <p> ...كي شفتك أول خطرة جات في بالي هاديك لبلاصة </p>
          <p>🌳🌳 و كي دخلت للكونت نتاعك لقيت هادو </p>

          <p>So I'm glad that I can speak with you right now...</p>
        </div>
        <Girl />
        <p>🕊️ و هادا البارتي الثاني علاش قتلك ننشبهي للحمامة</p>
      </div>
    </div>
  );
};

export default Settings;
