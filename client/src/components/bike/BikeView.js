import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  PageHeader,
  Statistic,
  Descriptions,
  Affix
} from "antd";
import Axios from "axios";

import MainNav from "../nav/MainNav";
import BikeMenu from "./BikeMenu";
import BikeMeasurementsForm from "./BikeMeasurementsForm";
import MeasurementDisplay from "../measurement/MeasurementDisplay";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [active, setActive] = useState("measurements");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then(res => {
        setBike(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, [id]);

  return (
    <>
      <PageHeader title={bike.nickname}>
        <Row type="flex">
          <Statistic title="Brand" value={bike.brand} />
          <Statistic title="Model" value={bike.model} />
          <Statistic title="Type" value={bike.type} />
          <Statistic title="Weight" value={`${bike.weight} lbs`} />
        </Row>
      </PageHeader>
      <Row>
        <Col span={3}>
          <BikeMenu active={active} setActive={setActive} />
        </Col>
        {active === "measurements" && (
          <>
            <Col span={8} offset={1}>
              <BikeMeasurementsForm bike={bike} setHovered={setHovered} />
            </Col>
            <Col span={10} offset={1}>
              <Affix offsetTop={40}>
                <MeasurementDisplay hovered={hovered} />
              </Affix>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default BikeView;
