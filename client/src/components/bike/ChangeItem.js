import React from "react";
import { Comment } from "semantic-ui-react";

const ChangeItem = ({ description, lastEdited }) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Metadata>{lastEdited}</Comment.Metadata>
        <Comment.Text>{description}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default ChangeItem;
