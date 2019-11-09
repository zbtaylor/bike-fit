import React from "react";
import BikeForm from "./BikeForm";

const BikeCreate = props => {
  const newBike = {
    id: 0,
    nickname: "",
    brand: "",
    model: "",
    weight: "",
    type: "",
    geometry: {
      reach: "",
      stack: "",
      wheelbase: ""
    }
  };
  return <BikeForm bike={newBike} disabled={false} {...props} />;
};

export default BikeCreate;
