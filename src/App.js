import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      auth.onAuthStateChanged((user) => {
        setUser(user);
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  }, []);

  return (
    <div className="App ">
      {user ? (
        <>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/s/*" element={<Layout />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      ) : (
        <>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
