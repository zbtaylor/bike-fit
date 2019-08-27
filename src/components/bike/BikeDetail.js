import React from "react";
import { Container, Grid, Table } from "semantic-ui-react";
import MainNav from "../nav/MainNav";

import bikes from "../../Data";

const BikeDetail = props => {
  const { id } = props.match.params;

  return (
    <Container>
      <MainNav />
      <Grid columns={2}>
        <Grid.Column>
          <h2>{bikes[id].name}</h2>
          <p>
            {bikes[id].brand} {bikes[id].model}
          </p>
          <p>{bikes[id].weight}</p>
          <p>{bikes[id].type}</p>
        </Grid.Column>
        <Grid.Column>
          <h3>Frame Geometry</h3>
          <Table celled striped columns={2}>
            <Table.Body>
              {Object.keys(bikes[id].geometry).map(measurement => {
                return (
                  <Table.Row key={measurement}>
                    <Table.Cell className="measurement">
                      {measurement}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {bikes[id].geometry[measurement]}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BikeDetail;
