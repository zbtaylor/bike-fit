import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

const UserLogin = props => {
  return (
    <>
      <h2>Login</h2>
      <UserForm {...props} buttonText="Log In" />
      <Link to="/register">Not a user?</Link>
    </>
  );
};

export default UserLogin;
