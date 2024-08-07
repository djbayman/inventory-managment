import React, { useState } from "react";
// import "./styles.css";

const countries = ["Austria", "India", "Italy", "Russia", "United States"];

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option key=""></option>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={(e) => setAcceptedTerms(e.target.value)}
          required
        />
        I accept the terms of service
      </label>

      <button>Submit</button>
    </form>
  );
}
