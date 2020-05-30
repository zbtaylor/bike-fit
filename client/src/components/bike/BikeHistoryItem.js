import React, { useEffect, useState } from "react";
import { Row, Col, Timeline, Button } from "antd";
import Axios from "axios";

import BikeHistoryItemNoteForm from "./BikeHistoryItemNoteForm";

const BikeHistoryItem = ({ current, previous }) => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState(current.notes);
  const date = current.createdAt;
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
    crankLength: "Crank Length",
  };

  return (
    <Timeline.Item key={date}>
      <Row>
        <Col span={10}>
          <p>{new Date(date).toDateString()}</p>
          {Object.keys(measurements).map((measurement) => {
            console.log(previous[`${measurement}`]);
            if (current[`${measurement}`] !== previous[`${measurement}`]) {
              return (
                <p key={measurement}>
                  <strong>{measurements[measurement]}</strong>
                  <br />
                  {`From ${previous[`${measurement}`] || `0`} 
                  to ${current[`${measurement}`]}`}
                </p>
              );
            }
          })}
          <Button size="small" onClick={() => setShowForm(!showForm)}>
            {notes ? "Edit Note" : "Add Note"}
          </Button>
        </Col>
        <Col span={14}>
          {!showForm && <p>{notes}</p>}
          {showForm && (
            <BikeHistoryItemNoteForm
              setShowForm={setShowForm}
              notes={notes}
              setNotes={setNotes}
              id={current.id}
            />
          )}
        </Col>
      </Row>
    </Timeline.Item>
  );
};

export default BikeHistoryItem;
