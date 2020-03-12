import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { AccountContext } from "../../contexts/AccountContext";
import { Layout, Menu, Button, Typography } from "antd";
const { Text } = Typography;

const Nav = props => {
  const { setLoggedIn, loggedIn } = useContext(AccountContext);

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload(true);
    setLoggedIn(false);
  };

  return (
    loggedIn && (
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[props.location.pathname.split("/")[1]]}
      >
        <Menu.Item className="logo"></Menu.Item>
        <Menu.Item key="bikes">
          <a href="/bikes">Bikes</a>
        </Menu.Item>
        <Menu.Item key="account">
          <a href="/account">Account</a>
        </Menu.Item>
        <Menu.Item onClick={() => logout()}>Log Out</Menu.Item>
      </Menu>
    )
  );
};

const MainNav = withRouter(Nav);

export default MainNav;
