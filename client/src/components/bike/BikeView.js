import React, { useState, useEffect } from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import Axios from "axios";

import MainNav from "../nav/MainNav";
import BikeMenu from "./BikeMenu";
import BikeMeasurements from "./BikeMeasurements";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [active, setActive] = useState("measurements");

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then(res => {
        setBike(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, [id]);

  return (
    <>
      <MainNav {...props} />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h2>{bike.nickname}</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <BikeMenu active={active} setActive={setActive} />
          </Grid.Column>
          <Grid.Column stretched width={13}>
            {active === "measurements" && <BikeMeasurements bike={bike} />}
            {active === "history" && "history"}
            {active === "specs" && "specs"}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default BikeView;
