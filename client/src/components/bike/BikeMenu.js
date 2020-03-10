import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const BikeMenu = ({ active, setActive, nickname, match }) => {
  const handleClick = name => {
    setActive(name);
  };

  return (
    <Menu selectedKeys={match.params.section}>
      <Menu.Item
        key="current"
        onClick={() => {
          handleClick("current");
        }}
      >
        <Link to={`/bikes/${match.params.id}/current`}>Current Fit</Link>
      </Menu.Item>
      <Menu.Item
        key="history"
        onClick={() => {
          handleClick("history");
        }}
      >
        <Link to={`/bikes/${match.params.id}/history`}>History</Link>
      </Menu.Item>
      <Menu.Item
        key="info"
        onClick={() => {
          handleClick("info");
        }}
      >
        <Link to={`/bikes/${match.params.id}/info`}>Info</Link>
      </Menu.Item>
    </Menu>
  );
};

export default BikeMenu;
