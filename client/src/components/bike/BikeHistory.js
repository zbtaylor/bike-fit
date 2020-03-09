import React, { useEffect, useState } from "react";
import { Timeline } from "antd";
import Axios from "axios";

import BikeHistoryItem from "./BikeHistoryItem";

const BikeHistory = ({ id, bike }) => {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`/api/history/${id}`)
      .then(res => {
        setHistory(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return "loading";
  }

  return (
    <Timeline>
      {history.map(historyItem => {
        return (
          <BikeHistoryItem historyItem={historyItem} key={historyItem.id} />
        );
      })}
    </Timeline>
  );
};

export default BikeHistory;
