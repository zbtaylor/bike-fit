import React from "react";
import ChangeItem from "./ChangeItem";
import ChangeFormNew from "./ChangeFormNew";
import { Comment } from "semantic-ui-react";

const ChangeList = ({ changes, setChanges, bike_id }) => {
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
              />
            );
          })}
        </Comment.Group>
      </>
    );
  } else {
    return <em className="u-text-subtle">No fit changes yet.</em>;
  }
};

export default ChangeList;
