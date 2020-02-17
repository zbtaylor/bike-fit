import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";
import MainNav from "../nav/MainNav";
import BikeList from "./BikeList";
import Axios from "axios";

const BikePage = props => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    Axios.get("/api/bikes")
      .then(res => {
        setBikes(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, []);

  return (
    <Row>
      <Col>
        <h1>My Bikes</h1>
        <BikeList bikes={bikes} />
        <Button as={Link} to="/bikes/new" content="Add New Bike" primary />
      </Col>
    </Row>
  );
};

export default BikePage;
