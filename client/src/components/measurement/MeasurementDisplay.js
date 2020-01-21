import React from "react";
import MeasurementSVG from "./MeasurementSVG";
import MeasurementDescription from "./MeasurementDescription";
import { withSize } from "react-sizeme";

const MeasurementDisplay = ({ hovered, size }) => {
  return (
    <>
      <MeasurementSVG hovered={hovered} width={size.width} />
      <MeasurementDescription hovered={hovered} />
    </>
  );
};

export default withSize()(MeasurementDisplay);
