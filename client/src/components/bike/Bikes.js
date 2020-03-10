import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Row, Col } from "antd";
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
    <>
      <PageHeader title="Bikes" />
      <BikeList bikes={bikes} />
      <Button href="/bikes/new" type="primary">
        Add New Bike
      </Button>
    </>
  );
};

export default BikePage;
