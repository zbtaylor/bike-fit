import React, { useState, useEffect, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Line, Text, Image } from "react-konva";
import useImage from "use-image";
import visualizerSVG from "../../assets/visualizer.svg";
import { ReactSVG } from "react-svg";

const MeasurementSVG = ({ hovered }) => {
  return (
    <div id="bikeVisualizer">
      <ReactSVG className={hovered} src={visualizerSVG} />
    </div>
  );
};

export default MeasurementSVG;
