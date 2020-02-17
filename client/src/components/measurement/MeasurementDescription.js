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
    },
    saddleBrandModel: {
      title: "Saddle Brand & Model",
      description: "Record the saddle brand and model."
    },
    stemLength: {
      title: "Stem Length",
      description:
        "Measure center of the stem binder bolt to the center of the bars."
    },
    stemAngle: {
      title: "Stem Angle",
      description:
        "Record the stem angle from horizontal. Especially on shorter stems, hold angle finder so it is parallel to stem angle. In the stem is downward sloping, record as a negative number. It stem is upward sloping, record as a positive number."
    },
    handlebarBrandModel: {
      title: "Handlebar Brand & Model",
      description: "Record the handlebar brand and model."
    },
    handlebarWidth: {
      title: "Handlebar Width",
      description:
        "Measure width from center to center at the lower section of the drops."
    },
    handlebarAngle: {
      title: "Handlebar Angle",
      description:
        "Measure drop type bar angle off of lower section of drops using level angle finder. Record any positive or negative angles to be consistent with the system use on the stem. In other words, if the lower section is pointing downward, or more toward the rear axle, record this as a positive number. If the lower section is sloping upward, toward the rider, record this as a negative number."
    },
    brakeLeverPosition: {
      title: "Brake Lever Position",
      description:
        "Record position of brake levers on handlebars. Place straight edge on lower drops and measure tip of lever as above or below this line."
    },
    crankLength: {
      title: "Crank Length",
      description:
        "Record crank length. Cranks are measured from the center of the pedal mount to the center of the spindle square. Arm length in millimeters is typically labeled on the back of the crank."
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
