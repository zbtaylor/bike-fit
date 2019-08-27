import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import MainNav from "../nav/MainNav";

const BikesPage = props => {
  return (
    <Container>
      <MainNav />
      <h2>Bikes</h2>
      <Button
        as={Link}
        to="/bikes/add"
        floated="right"
        content="Add Bike"
        primary
      />
    </Container>
  );
};

export default BikesPage;
