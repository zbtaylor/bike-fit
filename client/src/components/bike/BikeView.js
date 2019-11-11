import React, { useState, useEffect } from "react";
import BikeForm from "./BikeForm";
import Axios from "axios";

const BikeDetail = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:9000/bikes/${id}`)
      .then(res => {
        setBike(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, []);

  return <BikeForm bike={bike} id={id} disabled={true} {...props} />;
};

export default BikeDetail;
