import { useContext, useEffect } from "react";
import { RiPencilFill } from "react-icons/ri";
import { InventoryContext } from "../context/GlobalContext";
import useUpdate from "./CRUD/useUpdate";
import usePost from "./CRUD/usePost";
import useFetch from "./CRUD/useFetch";

const Settings = () => {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userCurrentPassword,
    userNewPassword,
    setUserState,
    userPhoto,
  } = useContext(InventoryContext);
  const { updateProfil } = useUpdate();
  const { userValues } = useFetch();

  useEffect(() => {
    setUserState({
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userCurrentPassword: "",
      userNewPassword: "",
    });
  }, []);

  return (
    <div className="mx-4">
      <div className="comp-head my-4">
        <h1 className="text-xl font-bold ">your profile</h1>
        <p className="text-slate-500">update your profile here</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 relative">
          <img
            src={userValues?.photo}
            alt=""
            className="w-28 h-28 border-2 border-cyan-900 rounded-full "
          />
          <RiPencilFill className="absolute -bottom-2 right-2 text-3xl p-1 bg-white rounded-full cursor-pointer hover:text-cyan-800" />
          <label htmlFor="user-photo" className="cursor-pointer"></label>
          <input
            id="user-photo"
            type="file"
            className="absolute -bottom-2 right-2 bg-cyan-500 w-8 h-8 opacity-0  rounded-full"
            onChange={(e) =>
              setUserState((prevState) => ({
                ...prevState,
                userPhoto: e.target.files[0],
              }))
            }
          />
        </div>
        <form className="sm:w-1/3" onSubmit={(e) => e.preventDefault()}>
          <label className="flex items-center gap-2">
            <input
              type="text"
              placeholder="your first name"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              value={userFirstName}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userFirstName: e.target.value,
                }))
              }
              required
            />
            <input
              type="text"
              placeholder="your last name"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              value={userLastName}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userLastName: e.target.value,
                }))
              }
              required
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="your new email"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              value={userEmail}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userEmail: e.target.value,
                }))
              }
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="your current password"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              value={userCurrentPassword}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userCurrentPassword: e.target.value,
                }))
              }
              autoComplete="off"
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="your new password"
              className="mb-8 block w-full border-2 border-slate-400 rounded-md h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-900 "
              style={{ transition: "transform ease-in-out 0.5" }}
              value={userNewPassword}
              onChange={(e) =>
                setUserState((prevState) => ({
                  ...prevState,
                  userNewPassword: e.target.value,
                }))
              }
              autoComplete="off"
              required
            />
          </label>
          <div className="">
            <button
              className="block w-full  bg-cyan-800 text-lg font-bold text-white px-3 py-2 rounded hover:bg-slate-400 hover:text-black transition-colors"
              onClick={() => {
                if (
                  userFirstName &&
                  userLastName &&
                  userEmail &&
                  userNewPassword.length >= 8 &&
                  userCurrentPassword.length >= 8
                ) {
                  updateProfil();
                }
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
