import React, { useState } from "react";
import ChangeItem from "./ChangeItem";
import ChangeFormNew from "./ChangeFormNew";
import { Comment, Modal, Button } from "semantic-ui-react";
import Axios from "axios";

const ChangeList = ({ changes, setChanges, bike_id }) => {
  const [opened, setOpened] = useState(false);
  const [changeId, setChangeId] = useState();

  const toggleModal = id => {
    setOpened(!opened);
    setChangeId(id);
  };

  const initiateDelete = () => {
    Axios.delete(`/api/changes/${changeId}`).then(res => {
      toggleModal();
      // props.history.push("/bikes");
    });
  };
  if (changes.length > 0) {
    return (
      <>
        <Comment.Group className="changesList">
          <ChangeFormNew
            changes={changes}
            setChanges={setChanges}
            bike_id={bike_id}
          />
          {changes.map(change => {
            return (
              <ChangeItem
                key={change.id}
                description={change.description}
                created={change.created}
                notes={change.notes}
                id={change.id}
                bike_id={change.bike_id}
                changes={changes}
                setChanges={setChanges}
                toggleModal={toggleModal}
              />
            );
          })}
        </Comment.Group>
        <Modal open={opened} size="mini">
          <Modal.Header>Remove Fit Change</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to remove this fit change?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => toggleModal("")}>
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
  } else {
    return <em className="u-text-subtle">No fit changes yet.</em>;
  }
};

export default ChangeList;
