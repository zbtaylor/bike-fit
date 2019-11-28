import React from "react";
import ChangeItem from "./ChangeItem";
import { Table } from "semantic-ui-react";

const ChangeList = ({ changes }) => {
  if (changes.length > 0) {
    return (
      <Table className="changesList">
        <Table.Body>
          {changes.map(change => {
            return (
              <ChangeItem
                key={change.id}
                description={change.description}
                created={change.created}
                notes={change.notes}
              />
            );
          })}
        </Table.Body>
      </Table>
    );
  } else {
    return <em className="u-text-subtle">No fit changes yet.</em>;
  }
};

export default ChangeList;
