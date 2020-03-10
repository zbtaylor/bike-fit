import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { AccountContext } from "../../contexts/AccountContext";
import { Layout, Menu, Button, Typography } from "antd";
const { Text } = Typography;

const Nav = () => {
  const { setLoggedIn, loggedIn } = useContext(AccountContext);

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload(true);
    setLoggedIn(false);
  };

  return loggedIn ? (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item>
        <a href="/" className="logo">
          <strong>MyBikeFit</strong>
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/bikes">Bikes</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/account">Account</a>
      </Menu.Item>
      <Menu.Item onClick={() => logout()}>Log Out</Menu.Item>
    </Menu>
  ) : (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item>
        <a href="/" className="logo">
          My Bike Fit Journal
        </a>
      </Menu.Item>
    </Menu>
  );
};

const MainNav = withRouter(Nav);

export default MainNav;
