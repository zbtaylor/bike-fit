import React from "react";
import { List, Button } from "antd";
import { Link } from "react-router-dom";

const BikeList = props => {
  const { bikes } = props;

  return (
    <List>
      {bikes.map(bike => {
        return (
          <List.Item key={bike.id} href={`/bikes/${bike.id}`}>
            <List.Item.Meta
              title={bike.nickname}
              description={`${bike.brand} ${bike.model}`}
            />
            <Button href={`/bikes/${bike.id}`}>View</Button>
          </List.Item>
        );
      })}
    </List>
  );
};

export default BikeList;
