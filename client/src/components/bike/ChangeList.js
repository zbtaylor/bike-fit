import React from "react";
import ChangeItem from "./ChangeItem";
import { Comment } from "semantic-ui-react";

const ChangeList = ({ changes }) => {
  return (
    <Comment.Group>
      {changes.map(change => {
        return (
          <ChangeItem
            key={change.id}
            description={change.description}
            lastEdited={change.last_edited}
          />
        );
      })}
    </Comment.Group>
  );
};

export default ChangeList;
