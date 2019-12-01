import React, { useState } from "react";
import { Comment } from "semantic-ui-react";
import ChangeFormEdit from "./ChangeFormEdit";

const ChangeItem = ({
  id,
  description,
  created,
  notes,
  bike_id,
  changes,
  setChanges
}) => {
  const [visible, setVisible] = useState(false);
  created = new Date(created);

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const createdOn = `${
    MONTHS[created.getMonth()]
  } ${created.getDate()}, ${created.getFullYear()}`;

  return (
    <>
      <Comment className="changeItem">
        <Comment.Content>
          <Comment.Author>{description}</Comment.Author>
          <Comment.Metadata>
            <div>{createdOn}</div>
          </Comment.Metadata>
          <Comment.Text>{notes}</Comment.Text>
          <Comment.Actions>
            <Comment.Action onClick={() => setVisible(!visible)}>
              {visible ? "Cancel" : "Edit"}
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <ChangeFormEdit
          editing={true}
          id={id}
          bike_id={bike_id}
          description={description}
          notes={notes}
          visible={visible}
          setVisible={setVisible}
          changes={changes}
          setChanges={setChanges}
        />
      </Comment>
    </>
  );
};

export default ChangeItem;
