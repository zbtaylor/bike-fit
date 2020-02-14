import React, { useState, useEffect } from "react";
import Axios from "axios";

const AuthConfirmation = props => {
  const [waiting, setWaiting] = useState(true);
  useEffect(() => {
    const body = {
      hash: props.match.params.hash
    };
    Axios.post("/api/auth/confirm/", body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        // handle error
        console.log(err.message);
      });
  }, []);
  return <h2>Confirmation</h2>;
};

export default AuthConfirmation;
