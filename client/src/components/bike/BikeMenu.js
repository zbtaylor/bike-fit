import React from "react";
import { Menu } from "antd";

const BikeMenu = ({ active, setActive, nickname }) => {
  const handleClick = name => {
    setActive(name);
  };

  return (
    <Menu defaultSelectedKeys={["measurements"]}>
      <Menu.Item
        key="measurements"
        onClick={() => {
          handleClick("measurements");
        }}
      >
        Measurements
      </Menu.Item>
      <Menu.Item
        key="history"
        onClick={() => {
          handleClick("history");
        }}
      >
        History
      </Menu.Item>
      <Menu.Item
        key="specs"
        onClick={() => {
          handleClick("specs");
        }}
      >
        Specs
      </Menu.Item>
    </Menu>
  );
};

export default BikeMenu;
