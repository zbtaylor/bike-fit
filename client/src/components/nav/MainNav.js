import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const MainNav = props => {
  const logout = () => {
    window.localStorage.removeItem("token");
    props.history.push("/login");
  };

  return (
    <Menu>
      <Menu.Item as={NavLink} name="Bikes" to="/bikes" />
      <Menu.Item position="right" name="Logout" onClick={() => logout()} />
    </Menu>
  );
};

export default MainNav;
