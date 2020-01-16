import React, { useState } from "react";
import { Menu, Segment, Grid, Sticky } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import MainNav from "../nav/MainNav";
import Axios from "axios";
import { SizeMe } from "react-sizeme";
import MeasurementVisualizer from "../measurement/MeasurementVisualizer";
import MeasurementDescription from "../measurement/MeasurementDescription";

const BikeCreate = props => {
  const [hovered, setHovered] = useState(null);

  const newBike = {
    id: 0,
    nickname: "",
    brand: "",
    model: "",
    weight: "",
    type: "",
    reach: "",
    stack: "",
    wheelbase: ""
  };
  return (
    <>
      <MainNav {...props} />
      <Grid columns={2}>
        <Grid.Column width={7}>
          <BikeForm
            bike={newBike}
            disabled={false}
            setHovered={setHovered}
            {...props}
          />
        </Grid.Column>
        <SizeMe
          render={({ size }) => (
            <Grid.Column width={9}>
              <Sticky offset={30}>
                <MeasurementVisualizer width={size.width} hovered={hovered} />
                <MeasurementDescription hovered={hovered} />
              </Sticky>
            </Grid.Column>
          )}
        />
      </Grid>
    </>
  );
};

export default BikeCreate;
