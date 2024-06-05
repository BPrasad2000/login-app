import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'

const SignUpForm = () => {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const handlesubmit= async(e)=>{
        e.preventDefault();
        try {
           await createUserWithEmailAndPassword(auth,email,password)
            alert("Account is created..!")
        } catch (err) {
            alert("Password should be at least 6 characters ")
            console.log(err);
        }
    }
  return (
    <div>
        <h1 className="text-center pb-2">Sign Up</h1>
        <form className="needs-validation" onSubmit={handlesubmit} noValidate>
        <div className="form-group was-validated mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label  fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="invalid-feedback">
            Please Enter valid email
          </div>
        <div className="form-group was-validated mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          </div>
          <div className="center">
      <button type="submit">Sign Up</button>
      </div>
      <p>
        Already Registered? <Link className="link" to={"/"}>Login</Link>
      </p>
      </form>
    </div>
  );
};

export default SignUpForm;
