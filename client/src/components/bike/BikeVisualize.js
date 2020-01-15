import React, { useState, useEffect, useRef } from "react";
import Konva from "konva";
import { Image } from "semantic-ui-react";
import { Stage, Layer, Line, Text } from "react-konva";
import useImage from "use-image";
import bikeJpeg from "../../assets/bike.jpeg";

const BikeVisualize = ({ width, hovered }) => {
  const initialWidth = width;
  const [height, setHeight] = useState((width / 877) * 538);
  const [scale, setScale] = useState(width / 577);

  useEffect(() => {
    setHeight((width / 877) * 538);
    setScale(width / 577);
  }, [width]);

  const BikeImage = () => {
    const [image] = useImage(bikeJpeg);
    return <Image image={image} width={width * 0.95} height={height * 0.95} />;
  };
  return (
    <div id="bikeVisualizer">
      <Stage width={width} height={height}>
        <Layer>
          <Line
            x={242 * scale}
            y={244 * scale}
            points={[0, 0, -70, -240]}
            closed
            scale={{ x: scale, y: scale }}
            stroke="red"
            visible={hovered === "saddleHeight" ? true : false}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default BikeVisualize;
