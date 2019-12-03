import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const AuthRegister = props => {
  return (
    <>
      <h2>Register</h2>
      <AuthForm {...props} buttonText="Register" />
      <Link to="/login">Already a user?</Link>
    </>
  );
};

export default AuthRegister;
