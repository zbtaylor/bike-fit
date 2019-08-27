import React from "react";
import { Container } from "semantic-ui-react";
import MainNav from "../nav/MainNav";

const BikeDetail = props => {
  const { id } = props.match.params;

  return (
    <Container>
      <MainNav />
      <h2>Bike Detail</h2>
      <p>Id: {id}</p>
    </Container>
  );
};

export default BikeDetail;
