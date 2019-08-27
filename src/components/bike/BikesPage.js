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
      <Container>
        <Button
          as={Link}
          to="/bikes/add"
          floated="right"
          content="Add Bike"
          className="addBikeBtn"
          primary
        />
        <h2>Bikes</h2>
      </Container>
      <BikesList bikes={bikes} />
    </Container>
  );
};

export default BikesPage;
