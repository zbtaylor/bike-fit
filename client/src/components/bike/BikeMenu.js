import React from "react";
import { Grid, Menu } from "semantic-ui-react";

const BikeMenu = ({ active, setActive }) => {
  const handleClick = (e, { name }) => {
    setActive(name);
  };

  return (
    <Menu fluid vertical tabular>
      <Menu.Item
        name="measurements"
        onClick={handleClick}
        active={active === "measurements"}
      />
      <Menu.Item
        name="history"
        onClick={handleClick}
        active={active === "history"}
      />
      <Menu.Item
        name="specs"
        onClick={handleClick}
        active={active === "specs"}
      />
    </Menu>
  );
};

export default BikeMenu;
