import React, { useState, useEffect } from "react";
import { Container, Button, Modal } from "semantic-ui-react";
import BikeForm from "./BikeForm";
import ChangeList from "./ChangeList";
import ChangeForm from "./ChangeForm";
import MainNav from "../nav/MainNav";
import Axios from "axios";

const BikeEdit = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [changes, setChanges] = useState([]);
  const [opened, setOpened] = useState(false);

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

  return (
    <Container>
      <MainNav />
      <BikeForm
        bike={bike}
        id={id}
        disabled={false}
        openModal={openModal}
        {...props}
      />
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
      <h2>Changes</h2>
      <ChangeList changes={changes} />
      <ChangeForm id={id} changes={changes} setChanges={setChanges} />
    </Container>
  );
};

export default BikeEdit;
