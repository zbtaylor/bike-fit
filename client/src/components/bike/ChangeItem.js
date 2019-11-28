import React from "react";
import { Table } from "semantic-ui-react";

const ChangeItem = ({ description, created, notes }) => {
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
    <Table.Row className="u-align-top">
      <Table.Cell>
        <div className="description">{description}</div>
        {notes && (
          <div className="notes">
            <p className="u-text-subtle">Notes:</p>
            {notes}
          </div>
        )}
      </Table.Cell>
      <Table.Cell className="createdOn">
        <label>{createdOn}</label>
      </Table.Cell>
    </Table.Row>
  );
};

export default ChangeItem;
