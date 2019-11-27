import React from "react";
import UserForm from "./UserForm";

const UserRegister = props => {
  return (
    <>
      <h2>Register</h2>
      <UserForm {...props} />
    </>
  );
};

export default UserRegister;
