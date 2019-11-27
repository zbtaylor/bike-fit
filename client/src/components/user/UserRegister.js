import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

const UserRegister = props => {
  return (
    <>
      <h2>Register</h2>
      <UserForm {...props} />
      <Link to="/login">Already a user?</Link>
    </>
  );
};

export default UserRegister;
