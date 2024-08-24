import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { app, auth, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, update } from "firebase/database";
import { InventoryContext } from "../context/GlobalContext";
import { getDownloadURL, ref as stRef } from "firebase/storage";

const SignInWithG = () => {
  const navigate = useNavigate();

  const { setUserId } = useContext(InventoryContext);

  function googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(async (result) => {
          if (result.user) {
            setUserId(result.user.uid);
            const db = getDatabase(app);
            const newDocRef = ref(db, `inventory/${result.user.uid}/Auth/`);
            await set(newDocRef, {
              firstName: result.user.displayName,
              lastName: "",
              email: result.user.email,
              photo: "",
            });
            //
            const imgprofileRef = stRef(
              storage,
              `inv-file/AuthImgs/avatar.png`
            );
            getDownloadURL(imgprofileRef).then((url) => {
              update(ref(db, `inventory/${result.user.uid}/Auth/`), {
                photo: url,
              });
            });
            toast.success("User logged in Successfully", {
              position: "top-center",
            });
            navigate("/s/dashboard");
          }
        })
        .catch(() => window.location.reload());
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    } finally {
    }
  }

  return (
    <div className="">
      <p className="continue-p">--Or continue with--</p>
      <div
        className="bg-slate-200 rounded-md my-3 py-2 flex justify-center items-center gap-2 cursor-pointer hover:bg-slate-300 transition-colors shadow-md font-semibold"
        onClick={googleLogin}
      >
        <FcGoogle className="text-2xl" />
        <p>Sign In with google</p>
      </div>
    </div>
  );
};

export default SignInWithG;
