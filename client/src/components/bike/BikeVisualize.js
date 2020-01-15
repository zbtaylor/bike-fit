import React, { useState, useEffect, useRef } from "react";
import Konva from "konva";
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

  return (
    <div id="bikeVisualizer">
      <Stage width={width} height={height}>
        <Layer>
          <Line
            x={170 * scale}
            y={11 * scale}
            points={[0, 0, 73, 242]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            visible={hovered === "saddleHeight" ? true : false}
          />
          <Line
            dash={[10, 5]}
            x={132 * scale}
            y={9 * scale}
            points={[0, 0, 200, 0]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            lineCap="round"
            visible={hovered === "saddleHeightOverBars" ? true : false}
          />
          <Line
            x={300 * scale}
            y={9 * scale}
            points={[0, 0, 0, 31]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            lineCap="round"
            visible={hovered === "saddleHeightOverBars" ? true : false}
          />
          <Line
            dash={[10, 5]}
            x={280 * scale}
            y={41 * scale}
            points={[0, 0, 200, 0]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            lineCap="round"
            visible={hovered === "saddleHeightOverBars" ? true : false}
          />
          <Line
            dash={[10, 5]}
            x={222 * scale}
            y={12 * scale}
            points={[0, 0, 0, 40]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            lineCap="round"
            visible={hovered === "saddleToHandlebar" ? true : false}
          />
          <Line
            x={222 * scale}
            y={32 * scale}
            points={[0, 0, 180, 0]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            lineCap="round"
            visible={hovered === "saddleToHandlebar" ? true : false}
          />
          <Line
            dash={[10, 5]}
            x={404 * scale}
            y={12 * scale}
            points={[0, 0, 0, 40]}
            scale={{ x: scale, y: scale }}
            stroke="red"
            lineCap="round"
            visible={hovered === "saddleToHandlebar" ? true : false}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default BikeVisualize;
