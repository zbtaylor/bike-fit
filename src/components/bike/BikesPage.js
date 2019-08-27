import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import MainNav from "../nav/MainNav";
import BikesList from "./BikeList";

const bikes = [
  {
    id: 0,
    name: "Rocket",
    brand: "Specialized",
    model: "Allez Sprint",
    weight: "19 lbs",
    type: "Road"
  },
  {
    id: 1,
    name: "Blackbird",
    brand: "Cannondale",
    model: "SuperSix Evo",
    weight: "17 lbs",
    type: "Road"
  },
  {
    id: 2,
    name: "Abominable",
    brand: "Yeti",
    model: "SB150",
    weight: "22 lbs",
    type: "Mountain"
  }
];

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
