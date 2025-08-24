import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    } else {
      navigate("/auth/login");
    }
  }, []);

  const loginHandler = () => {
    console.log("Login");
    navigate("/");
    const user = {
      username: "edric123",
      email: "edric@mail.com",
    };

    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div>
      <h3>Login</h3>
      <button
        onClick={loginHandler}
        className="rounded-xl py-1 px-3 bg-blue-700 text-white hover:bg-blue-800"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
