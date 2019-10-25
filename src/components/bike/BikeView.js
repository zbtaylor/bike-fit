import React from "react";
import BikeForm from "./BikeForm";
import { bikes } from "../../Server";

const BikeDetail = props => {
  const id = props.match.params.id;
  const bike = bikes[id];

  return <BikeForm bike={bike} id={id} disabled={true} {...props} />;
};

export default BikeDetail;
