import React from "react";
import BikeForm from "./BikeForm";
import MainNav from "../nav/MainNav";

const BikeCreate = props => {
  const newBike = {
    id: 0,
    nickname: "",
    brand: "",
    model: "",
    weight: "",
    type: "",
    reach: "",
    stack: "",
    wheelbase: ""
  };
  return (
    <>
      <MainNav {...props} />
      <BikeForm bike={newBike} newBike={true} {...props} />
    </>
  );
};

export default BikeCreate;
