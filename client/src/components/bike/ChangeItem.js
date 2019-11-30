import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";
import ChangeForm from "./ChangeForm";

const ChangeItem = ({ id, description, created, notes }) => {
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
      <Table.Row className="u-align-top changeItem">
        <Table.Cell>
          <div className="description">{description}</div>
          {notes && (
            <div className="notes">
              <div className="u-text-subtle">
                <p>Notes:</p>
                {notes}
              </div>
            </div>
          )}
        </Table.Cell>
        <Table.Cell className="createdOn u-text-subtle">
          <em>{createdOn}</em>
          <div className="actions">
            <a onClick={() => setVisible(!visible)}>Edit</a>
            <a>Delete</a>
          </div>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell className="changeItemFormInline">
          <ChangeForm
            editing={true}
            id={id}
            description={description}
            notes={notes}
            visible={visible}
          />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ChangeItem;
