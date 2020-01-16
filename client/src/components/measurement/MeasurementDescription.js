import React from "react";

const MeasurementDescription = ({ hovered }) => {
  const measurements = {
    saddleHeight: {
      title: "Saddle Height",
      description:
        "Place a straight edge on top of the saddle and record height from the bottom bracket center to the lower edge of straight edge. Measure along the seat tube."
    },
    saddleHeightOverBars: {
      title: "Saddle Height Over Bars",
      description:
        "Measure perpendicularly from saddle to ground, and then bar to ground, and take the difference between these two measurements. Use a straight edge on top of the bars, and measure to lower edge of the straight edge."
    },
    saddleToHandlebar: {
      title: "Saddle to Handlebar Reach",
      description:
        "Measure from saddle tip to the center of the bars at the stem. "
    },
    saddleAngle: {
      title: "Saddle Angle",
      description:
        "Using a straight edge on top of saddle, measure saddle angle from horizontal. If the front end of the saddle is raised, record this upward sloping saddles as a positive number. Record downward sloping saddles with a negative number."
    },
    saddleForeAft: {
      title: "Saddle Fore Aft",
      description:
        "Drop a plum bob line from the saddle tip and measure distance from line to center of bottom bracket. It is easiest to tape line to saddle so it hangs from saddle end and extends freely toward the ground."
    }
  };
  return hovered !== null ? (
    <>
      <h3>{measurements[hovered].title}</h3>
      <p>{measurements[hovered].description}</p>
    </>
  ) : (
    <></>
  );
};

export default MeasurementDescription;
