import React from "react";
import MeasurementSVG from "./MeasurementSVG";
import MeasurementDescription from "./MeasurementDescription";
import { withSize } from "react-sizeme";

const MeasurementDisplay = ({ hovered }) => {
  return (
    <>
      <MeasurementSVG hovered={hovered} />
      <MeasurementDescription hovered={hovered} />
    </>
  );
};

export default withSize()(MeasurementDisplay);
