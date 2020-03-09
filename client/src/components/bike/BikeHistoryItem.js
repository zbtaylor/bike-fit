import React, { useEffect, useState } from "react";
import { Row, Col, Timeline, Button } from "antd";
import Axios from "axios";

import BikeHistoryItemNoteForm from "./BikeHistoryItemNoteForm";

const BikeHistoryItem = ({ historyItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState(historyItem.notes);
  const date = historyItem.created;
  const measurements = {
    saddleHeight: "Saddle Height",
    saddleHeightOverBars: "Saddle Height Over Bars",
    saddleToHandlebar: "Saddle to Handlebar Reach",
    saddleAngle: "Saddle Angle",
    saddleForeAft: "Saddle Fore Aft",
    stemLength: "Stem Length",
    stemAngle: "Stem Angle",
    handlebarWidth: "Handlebar Width",
    handlebarAngle: "Handlebar Angle",
    brakeLeverPosition: "Brake Lever Position",
    crankLength: "Crank Length"
  };

  return (
    <Timeline.Item key={date}>
      <Row>
        <Col span={10}>
          <p>{new Date(date).toDateString()}</p>
          {Object.keys(measurements).map(measurement => {
            if (
              historyItem[`${measurement}_from`] !==
              historyItem[`${measurement}_to`]
            ) {
              return (
                <p key={measurement}>
                  <strong>{measurements[measurement]}</strong>
                  <br />
                  {`From ${historyItem[`${measurement}_from`]} to ${
                    historyItem[`${measurement}_to`]
                  }`}
                </p>
              );
            }
          })}
          <Button size="small" onClick={() => setShowForm(!showForm)}>
            {notes ? "Edit Note" : "Add Note"}
          </Button>
        </Col>
        <Col span={14}>
          {!showForm && <p>{historyItem.notes}</p>}
          {showForm && (
            <BikeHistoryItemNoteForm
              setShowForm={setShowForm}
              notes={notes}
              id={historyItem.id}
            />
          )}
        </Col>
      </Row>
    </Timeline.Item>
  );
};

export default BikeHistoryItem;
