import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import BikeMeasurementsForm from "./BikeMeasurementsForm";
import MeasurementDisplay from "../measurement/MeasurementDisplay";

const BikeMeasurements = ({ bike }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <Grid columns={2}>
      <Grid.Column>
        <BikeMeasurementsForm bike={bike} setHovered={setHovered} />
      </Grid.Column>
      <Grid.Column>
        <MeasurementDisplay hovered={hovered} />
      </Grid.Column>
    </Grid>
  );
};

export default BikeMeasurements;
