import "../App.css";
import React, { useContext, useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { InventoryContext } from "../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import SignInWithG from "./SignInWithG";
import IntroNav from "../components/IntroNav";
import Loading from "../components/Loading";

export default function Login() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setUserId } = useContext(InventoryContext);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLogin((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.email && login.password.length >= 8) {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, login.email, login.password);
        setUserId(auth.currentUser.uid);
        toast.success("User logged in Successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        navigate("/s/dashboard");
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 2000,
        });
      } finally {
        setIsLoading(false);
      }
    }
    setSubmitted(true);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <IntroNav />
      <div className="form-container rounded-lg ">
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className="form-field rounded-md focus:outline-2 focus:outline-cyan-700 "
            type="email"
            placeholder="Email"
            name="email"
            value={login.email}
            onChange={handleInputChange}
          />

          {submitted && !login.email && (
            <span id="email-error">Please enter an email address</span>
          )}

          <input
            className="form-field rounded-md focus:outline-2 focus:outline-cyan-700"
            type="password"
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={handleInputChange}
            autoComplete="on"
          />

          {submitted && login.password.length < 8 && (
            <span id="password-error">Please enter an correct password</span>
          )}

          <button className="form-field rounded-md font-semibold" type="submit">
            Login
          </button>
          <SignInWithG />
          <p className="forgot-password text-right mt-4 text-sm">
            Don't have an account?
            <Link to="/register" className="text-cyan-900 font-medium ps-2">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
