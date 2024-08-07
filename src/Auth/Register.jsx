import "../App.css";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
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

    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password.length >= 8
    ) {
      setValid(true);
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = auth.currentUser;
        console.log(user);

        console.log("User Registered Successfully!!");
        // toast.success("User Registered Successfully!!", {
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
            <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
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
            Register
          </button>
        )}
      </form>
    </div>
  );
}
