import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import {signInWithEmailAndPassword} from 'firebase/auth'


const Login = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const handlesubmit= async(e)=>{
        e.preventDefault();
        try {
           await signInWithEmailAndPassword(auth,email,password)
           alert("Login Successfully..!");
        } catch (err) {
            alert("Check your username and password.!")
            console.log(err);
        }
    }
  return (
    <div>
      <h1 className="text-center pb-2">Login</h1>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label  fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="center">
          <button type="submit">Login</button>
        </div>
        <p>
          Don't have account ?{" "}
          <Link className="link" to={"/signup"}>
            {" "}
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

