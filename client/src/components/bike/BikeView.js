import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  PageHeader,
  Statistic,
  Descriptions,
  Affix,
  Modal,
} from "antd";
import Axios from "axios";

import MainNav from "../nav/MainNav";
import BikeMenu from "./BikeMenu";
import BikeMeasurementsForm from "./BikeMeasurementsForm";
import BikeInfoForm from "./BikeInfoForm";
import BikeHistory from "./BikeHistory";
import MeasurementDisplay from "../measurement/MeasurementDisplay";

const BikeView = (props) => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [active, setActive] = useState(props.match.params.section);
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);
  const { confirm } = Modal;

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then((res) => {
        console.log(res.data);
        setBike(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // handle error
        console.log(`Error: ${err}`);
      });
  }, [id]);

  function showDeleteConfirm() {
    confirm({
      title: "Are you sure you want to delete this bike?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        Axios.delete(`/api/bikes/${id}`)
          .then((removed) => {
            props.history.push("/bikes");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  if (loading) {
    return "...";
  }

  return (
    <>
      <PageHeader
        title={bike.nickname}
        extra={[
          <Button onClick={showDeleteConfirm} key="delete" type="danger" ghost>
            Delete Bike
          </Button>,
        ]}
      >
        <Row type="flex">
          <Statistic title="Brand" value={bike.brand} />
          <Statistic title="Model" value={bike.model} />
          <Statistic title="Type" value={bike.type} />
          <Statistic title="Weight" value={`${bike.weight} lbs`} />
          <Statistic title="Frame Size" value={`${bike.frameSize} cm`} />
        </Row>
      </PageHeader>
      <Row>
        <Col span={3}>
          <BikeMenu active={active} setActive={setActive} {...props} />
        </Col>
        {active === "current" && (
          <>
            <Col span={8} offset={1}>
              <h2 className="subpage-header">Current Fit</h2>
              <BikeMeasurementsForm
                bike={bike}
                setBike={setBike}
                id={id}
                setHovered={setHovered}
              />
            </Col>
            <Col span={10} offset={1}>
              <Affix offsetTop={40}>
                <MeasurementDisplay hovered={hovered} />
              </Affix>
            </Col>
          </>
        )}
        {active === "history" && (
          <Col span={19} offset={1}>
            <h2 className="subpage-header">History</h2>
            <BikeHistory id={id} bike={bike} />
          </Col>
        )}
        {active === "info" && !loading && (
          <>
            <Col span={19} offset={1}>
              <h2 className="subpage-header">Info</h2>
              <BikeInfoForm
                bike={bike}
                setBike={setBike}
                id={id}
                update={true}
                {...props}
              />
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default BikeView;
