import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import MainNav from "../nav/MainNav";
import BikeList from "./BikeList";
import Axios from "axios";

const BikePage = props => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    Axios.get("/api/bikes")
      .then(res => {
        setBikes(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, []);

  return (
    <>
      <MainNav {...props} />
      <Grid columns={1}>
        <Grid.Column>
          <h1>Your Bikes</h1>
          <BikeList bikes={bikes} />
          <Button as={Link} to="/bikes/new" content="Add New Bike" primary />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default BikePage;
