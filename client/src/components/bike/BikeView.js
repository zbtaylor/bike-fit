import React, { useState, useEffect } from "react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import MainNav from "../nav/MainNav";
import { Container } from "semantic-ui-react";
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
  }, [id]);

  return (
    <Container>
      <MainNav {...props} />
      <BikeForm bike={bike} id={id} disabled={true} {...props} />
      <ChangeList changes={changes} setChanges={setChanges} bike_id={id} />
    </Container>
  );
};

export default BikeView;
