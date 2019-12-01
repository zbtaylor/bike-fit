import React, { useState, useEffect } from "react";
import { Menu, Segment } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import MainNav from "../nav/MainNav";
import Axios from "axios";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [changes, setChanges] = useState([]);
  const [active, setActive] = useState("details");

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

  const handleClick = () => {
    if (active === "details") {
      setActive("fit");
    } else {
      setActive("details");
    }
  };

  return (
    <>
      <MainNav {...props} />
      <Menu attached="top" tabular>
        <Menu.Item
          name="bike details"
          active={active === "details"}
          onClick={() => handleClick()}
        />
        <Menu.Item
          name="fit changes"
          active={active === "fit"}
          onClick={() => handleClick()}
        />
      </Menu>
      <Segment attached="bottom">
        {active === "details" ? (
          <BikeForm bike={bike} id={id} disabled={true} {...props} />
        ) : (
          <ChangeList changes={changes} setChanges={setChanges} bike_id={id} />
        )}
      </Segment>
    </>
  );
};

export default BikeView;
