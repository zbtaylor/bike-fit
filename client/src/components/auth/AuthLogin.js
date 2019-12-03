import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

const AuthLogin = props => {
  return (
    <>
      <h2>Login</h2>
      <AuthForm {...props} buttonText="Log In" />
      <Link to="/register">Not a user?</Link>
    </>
  );
};

export default AuthLogin;
