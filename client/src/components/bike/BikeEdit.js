import React, { useState, useEffect } from "react";
import { Menu, Segment, Button, Modal } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import MainNav from "../nav/MainNav";
import Axios from "axios";

const BikeEdit = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [changes, setChanges] = useState([]);
  const [opened, setOpened] = useState(false);
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

  const closeModal = () => {
    setOpened(false);
  };

  const openModal = () => {
    setOpened(true);
  };

  const initiateDelete = () => {
    Axios.delete(`/api/bikes/${id}`).then(res => {
      closeModal();
      props.history.push("/bikes");
    });
  };

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
          <BikeForm
            bike={bike}
            id={id}
            disabled={false}
            openModal={openModal}
            {...props}
          />
        ) : (
          <ChangeList changes={changes} setChanges={setChanges} bike_id={id} />
        )}
      </Segment>
      <Modal open={opened} size="mini">
        <Modal.Header>Delete Bike</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete this bike?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => closeModal()}>
            No
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yes, Delete"
            onClick={() => initiateDelete()}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default BikeEdit;
