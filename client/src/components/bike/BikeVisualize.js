import React, { useState, useEffect, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Line, Text, Image } from "react-konva";
import useImage from "use-image";
import bikeJpeg from "../../assets/bike.jpeg";

const BikeVisualize = ({ width }) => {
  const [height, setHeight] = useState((width / 877) * 538);

  useEffect(() => {
    setHeight((width / 877) * 538);
  }, [width]);

  const BikeImage = () => {
    const [image] = useImage(bikeJpeg);
    return <Image image={image} width={width * 0.95} height={height * 0.95} />;
  };
  return (
    <Stage width={width} height={height}>
      <Layer>
        <BikeImage />
        <Text text="This is a bike." />
      </Layer>
    </Stage>
  );
};

export default BikeVisualize;
