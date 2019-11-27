import React, { useState, useEffect } from "react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import ChangeForm from "./ChangeForm";
import Axios from "axios";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [changes, setChanges] = useState([]);

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then(res => {
        setBike(res.data);
        setChanges(res.data.changes);
      })
      .catch(err => {
        // handle error
      });
  }, []);

  return (
    <>
      <BikeForm bike={bike} id={id} disabled={true} {...props} />
      <ChangeList changes={changes} />
      <ChangeForm id={id} changes={changes} setChanges={setChanges} />
    </>
  );
};

export default BikeView;
