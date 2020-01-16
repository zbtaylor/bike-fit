import React, { useState, useEffect, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Line, Text, Image } from "react-konva";
import useImage from "use-image";
import visualizerSVG from "../../assets/visualizer.svg";
import { ReactSVG } from "react-svg";

const BikeVisualize = ({ width, hovered }) => {
  const initialWidth = width;
  const [height, setHeight] = useState((width / 877) * 538);
  const [scale, setScale] = useState(width / 577);

  useEffect(() => {
    setHeight((width / 877) * 538);
    setScale(width / 577);
  }, [width]);

  useEffect(() => {}, [hovered]);

  return (
    <div id="bikeVisualizer">
      <ReactSVG className={hovered} src={visualizerSVG} />
    </div>
  );
};

export default BikeVisualize;
