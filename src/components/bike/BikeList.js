import React from "react";
import { List, Button } from "semantic-ui-react";

const BikeList = props => {
  const { bikes } = props;

  return (
    <List divided verticalAlign="middle" className="bikeList">
      {bikes.map(bike => {
        return (
          <List.Item>
            <List.Content floated="right">
              <Button compact basic href={`/bikes/${bike.id}`}>
                View
              </Button>
              <Button compact href={`/bikes/${bike.id}/edit`}>
                Edit
              </Button>
            </List.Content>
            <List.Content>
              <List.Header>{bike.name}</List.Header>
              {bike.brand} {bike.model}
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

export default BikeList;
