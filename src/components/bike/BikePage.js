import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "semantic-ui-react";
import MainNav from "../nav/MainNav";
import BikeList from "./BikeList";
import bikes from "../../Server";

const BikePage = () => {
  return (
    <Container>
      <MainNav />
      <Grid columns={1}>
        <Grid.Column>
          <h2>Bikes</h2>
          <BikeList bikes={bikes} />
          <Button as={Link} to="/bikes/new" content="Add New Bike" primary />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BikePage;
