import React from "react";
import ChangeItem from "./ChangeItem";
import { Table, Comment } from "semantic-ui-react";

const ChangeList = ({ changes }) => {
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
};

export default ChangeList;
