import "../App.css";
import React, { useContext, useState } from "react";
import { app, auth, storage } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDatabase, ref, set, update } from "firebase/database";
import { InventoryContext } from "../context/GlobalContext";
import IntroNav from "../components/IntroNav";
import Loading from "../components/Loading";
import { getDownloadURL, ref as stRef } from "firebase/storage";

export default function Register() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { setUserId } = useContext(InventoryContext);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setRegister((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      register.firstName &&
      register.lastName &&
      register.email &&
      register.password.length >= 8
    ) {
      try {
        setIsLoading(true);
        await createUserWithEmailAndPassword(
          auth,
          register.email,
          register.password
        );
        const user = auth.currentUser;
        if (user) {
          setUserId(user.uid);
          const db = getDatabase(app);
          const newDocRef = ref(db, `inventory/${user.uid}/Auth/`);
          await set(newDocRef, {
            firstName: register.firstName,
            lastName: register.lastName,
            email: user.email,
            photo: "",
          });
          //
          const imgprofileRef = stRef(storage, `inv-file/AuthImgs/avatar.png`);
          getDownloadURL(imgprofileRef).then((url) => {
            update(ref(db, `inventory/${user.uid}/Auth/`), {
              photo: url,
            });
          });

          toast.success("User Registered Successfully!!", {
            position: "top-center",
            autoClose: 2000,
          });
          navigate("/s/dashboard");
        }
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
            type="text"
            placeholder="First Name"
            name="firstName"
            value={register.firstName}
            onChange={handleInputChange}
          />

          {submitted && !register.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          <input
            className="form-field rounded-md focus:outline-none focus:outline-2 focus:outline-cyan-700"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={register.lastName}
            onChange={handleInputChange}
          />
          {submitted && !register.lastName && (
            <span id="last-name-error">Please enter a last name</span>
          )}

          <input
            className="form-field rounded-md focus:outline-none focus:outline-2 focus:outline-cyan-700"
            type="email"
            placeholder="Email"
            name="email"
            value={register.email}
            onChange={handleInputChange}
          />
          {submitted && !register.email && (
            <span id="email-error">Please enter an email address</span>
          )}

          <input
            className="form-field rounded-md focus:outline-none focus:outline-2 focus:outline-cyan-700"
            type="password"
            placeholder="Password"
            name="password"
            value={register.password}
            onChange={handleInputChange}
            autoComplete="off"
          />
          {submitted && register.password.length < 8 && (
            <span id="password-error">Please enter an correct password</span>
          )}

          <button className="form-field rounded-md" type="submit">
            Register
          </button>
          <p className="forgot-password text-right mt-4">
            Already registered{" "}
            <Link to="/login" className="text-cyan-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
