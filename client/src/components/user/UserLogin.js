import React from "react";
import UserForm from "./UserForm";

const UserLogin = props => {
  return (
    <>
      <h2>Login</h2>
      <UserForm {...props} />
    </>
  );
};

export default UserLogin;
