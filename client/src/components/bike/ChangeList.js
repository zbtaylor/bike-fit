import React from "react";
import ChangeItem from "./ChangeItem";
import { Container, Table } from "semantic-ui-react";

const ChangeList = ({ changes }) => {
  if (changes.length > 0) {
    return (
      <Container>
        <Table className="changesList">
          <Table.Body>
            {changes.reverse().map(change => {
              return (
                <ChangeItem
                  key={change.id}
                  description={change.description}
                  created={change.created}
                  notes={change.notes}
                  id={change.id}
                />
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    );
  } else {
    return <em className="u-text-subtle">No fit changes yet.</em>;
  }
};

export default ChangeList;
