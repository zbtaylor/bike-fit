import React from "react";
import { Comment } from "semantic-ui-react";

const ChangeItem = ({ description, created }) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Metadata>{created}</Comment.Metadata>
        <Comment.Text>{description}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default ChangeItem;
