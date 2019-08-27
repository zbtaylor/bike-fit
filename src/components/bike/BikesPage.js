import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import MainNav from "../nav/MainNav";
import BikesList from "./BikesList";

import bikes from "../../Data";

const BikesPage = props => {
  return (
    <Container>
      <MainNav />
      <h2>Bikes</h2>
      <BikesList bikes={bikes} />
      <Button
        as={Link}
        to="/bikes/add"
        content="Add Bike"
        className="addBikeBtn"
        primary
      />
    </Container>
  );
};

export default BikesPage;
