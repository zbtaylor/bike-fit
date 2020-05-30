import React, { useEffect, useState } from "react";
import { Timeline, Skeleton } from "antd";
import Axios from "axios";

import BikeHistoryItem from "./BikeHistoryItem";

const BikeHistory = ({ id, bike }) => {
  const [history, setHistory] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(`/api/history/${id}`)
      .then((res) => {
        setHistory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Skeleton active paragraph={{ rows: 14 }} />;
  }

  if (history.length === 0) {
    return "No fit changes have been made yet.";
  }

  return (
    <Timeline>
      {history.map((historyItem, i) => {
        if (historyItem[i + 1] !== undefined) {
          return (
            <BikeHistoryItem
              current={historyItem}
              previous={history[i + 1]}
              key={historyItem.id}
            />
          );
        } else {
          return (
            <BikeHistoryItem
              current={historyItem}
              previous={{}}
              key={historyItem.id}
            />
          );
        }
      })}
    </Timeline>
  );
};

export default BikeHistory;
