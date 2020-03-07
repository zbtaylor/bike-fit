import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  PageHeader,
  Statistic,
  Descriptions,
  Affix,
  Modal
} from "antd";
import Axios from "axios";

import MainNav from "../nav/MainNav";
import BikeMenu from "./BikeMenu";
import BikeMeasurementsForm from "./BikeMeasurementsForm";
import BikeSpecsForm from "./BikeSpecsForm";
import MeasurementDisplay from "../measurement/MeasurementDisplay";

const BikeView = props => {
  const id = props.match.params.id;
  const [bike, setBike] = useState({});
  const [active, setActive] = useState("measurements");
  const [hovered, setHovered] = useState(null);
  const { confirm } = Modal;

  useEffect(() => {
    Axios.get(`/api/bikes/${id}`)
      .then(res => {
        setBike(res.data);
      })
      .catch(err => {
        // handle error
      });
  }, [id]);

  function showDeleteConfirm() {
    confirm({
      title: "Are you sure you want to delete this bike?",
      // content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        Axios.delete(`/api/bikes/${id}`)
          .then(removed => {
            props.history.push("/bikes");
          })
          .catch(err => {
            console.log(err);
          });
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  return (
    <>
      <PageHeader
        title={bike.nickname}
        extra={[
          <Button onClick={showDeleteConfirm} key="delete" type="danger" ghost>
            Delete
          </Button>
        ]}
      >
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
        {active === "specs" && (
          <>
            <Col span={19} offset={1}>
              <BikeSpecsForm
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
