import React from "react";
import ChangeItem from "./ChangeItem";
import ChangeFormNew from "./ChangeFormNew";
import { Container, Comment, Header } from "semantic-ui-react";

const ChangeList = ({ changes, setChanges }) => {
  if (changes.length > 0) {
    return (
      <Container>
        <Comment.Group className="changesList">
          <Header as="h3" dividing>
            Fit Changes
          </Header>
          <ChangeFormNew />
          {changes.map(change => {
            return (
              <ChangeItem
                key={change.id}
                description={change.description}
                created={change.created}
                notes={change.notes}
                id={change.id}
                changes={changes}
                setChanges={setChanges}
              />
            );
          })}
        </Comment.Group>
      </Container>
    );
  } else {
    return <em className="u-text-subtle">No fit changes yet.</em>;
  }
};

export default ChangeList;
