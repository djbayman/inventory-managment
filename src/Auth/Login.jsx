import "../App.css";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    // console.log(values.password);
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.email && values.password.length >= 8) {
      setValid(true);
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log("User logged in Successfully");
        // window.location.href = "/profile";
        // toast.success("User logged in Successfully", {
        //   position: "top-center",
        // });
      } catch (error) {
        console.log(error.message);

        // toast.error(error.message, {
        //   position: "bottom-center",
        // });
      }
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3> Welcome {values.email}</h3>
            <div> Your login was successful! </div>
          </div>
        )}

        {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        )}

        {submitted && values.password.length < 8 && (
          <span id="password-error">Please enter an correct password</span>
        )}
        {!valid && (
          <button className="form-field" type="submit">
            Login
          </button>
        )}
      </form>
    </div>
  );
}
