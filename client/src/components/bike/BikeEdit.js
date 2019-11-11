import React, { useState, useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import Axios from "axios";

const BikeEdit = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    Axios.get(`/bikes/${id}`)
      .then(res => {
        setBike(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, []);

  const closeModal = () => {
    setOpened(false);
  };

  const openModal = () => {
    setOpened(true);
  };

  const initiateDelete = () => {
    Axios.delete(`/bikes/${id}`).then(res => {
      closeModal();
      props.history.push("/bikes");
    });
  };

  return (
    <>
      <BikeForm bike={bike} id={id} disabled={false} {...props} />
      <Button onClick={() => openModal()}>Delete</Button>
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
