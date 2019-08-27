import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "semantic-ui-react";
import MainNav from "../nav/MainNav";
import BikesList from "./BikesList";

import bikes from "../../Data";

const BikesPage = props => {
  return (
    <Container>
      <MainNav />
      <Grid columns={1}>
        <Grid.Column>
          <h2>Bikes</h2>
          <BikesList bikes={bikes} />
          <Button
            as={Link}
            to="/bikes/add"
            content="Add Bike"
            className="addBikeBtn"
            primary
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BikesPage;
