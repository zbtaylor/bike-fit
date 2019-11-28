import React from "react";
import { Table, Comment } from "semantic-ui-react";

const ChangeItem = ({ description, created, notes }) => {
  return (
    <Table.Row className="u-align-top">
      <Table.Cell className="createdOn">
        <label>{created}</label>
      </Table.Cell>
      <Table.Cell>
        <div className="description">{description}</div>
        {notes && (
          <div className="notes">
            <p>Notes:</p>
            {notes}
          </div>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default ChangeItem;
