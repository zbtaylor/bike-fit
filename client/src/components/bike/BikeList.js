import React from "react";
import { List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BikeList = props => {
  const { bikes } = props;

  return (
    <List divided verticalAlign="middle" className="bikeList">
      {bikes.map(bike => {
        return (
          <List.Item key={bike.id}>
            <List.Content floated="right">
              <Button compact basic as={Link} to={`/bikes/${bike.id}`}>
                View
              </Button>
            </List.Content>
            <List.Content>
              <List.Header>{bike.nickname}</List.Header>
              {bike.brand} {bike.model}
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

export default BikeList;
