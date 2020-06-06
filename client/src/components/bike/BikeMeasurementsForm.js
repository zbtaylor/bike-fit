import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Radio, Row, Col, Spin, Skeleton } from "antd";
import { Form, Input, InputNumber, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import Axios from "axios";

const BikeMeasurementsForm = ({ bike, setHovered, id, setBike }) => {
  const initial = {
    saddleHeight: bike.current_msmts.saddleHeight,
    saddleHeightOverBars: bike.current_msmts.saddleHeightOverBars,
    saddleToHandlebar: bike.current_msmts.saddleToHandlebar,
    saddleAngle: bike.current_msmts.saddleAngle,
    saddleForeAft: bike.current_msmts.saddleForeAft,
    stemLength: bike.current_msmts.stemLength,
    stemAngle: bike.current_msmts.stemAngle,
    handlebarWidth: bike.current_msmts.handlebarWidth,
    handlebarAngle: bike.current_msmts.handlebarAngle,
    brakeLeverPosition: bike.current_msmts.brakeLeverPosition,
    crankLength: bike.current_msmts.crankLength,
  };

  const validation = Yup.object().shape({
    saddleHeight: Yup.number(),
    saddleHeightOverBars: Yup.number(),
    saddleToHandlebar: Yup.number(),
    saddleAngle: Yup.number(),
    saddleForeAft: Yup.number(),
    stemLength: Yup.number(),
    stemAngle: Yup.number(),
    handlebarWidth: Yup.number(),
    handlebarAngle: Yup.number(),
    brakeLeverPosition: Yup.number(),
    crankLength: Yup.number(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    Axios.post(`/api/history`, { ...values, bike_id: id })
      .then((res) => {
        setSubmitting(false);
        setBike({ ...bike, current_msmts: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (Object.keys(bike).length === 0) {
    return <Skeleton active paragraph={{ rows: 14 }} />;
  }

  return (
    <Formik
      initialValues={initial}
      validationSchema={validation}
      onSubmit={handleSubmit}
      render={() => (
        <Form
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 10 }}
          labelAlign="left"
        >
          <Form.Item
            onMouseEnter={() => setHovered("saddleHeight")}
            name="saddleHeight"
            label="Saddle Height"
          >
            <InputNumber min={0} name="saddleHeight" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleHeightOverBars")}
            name="saddleHeightOverBars"
            label="Saddle Height Over Bars"
          >
            <InputNumber min={0} name="saddleHeightOverBars" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleToHandlebar")}
            name="saddleToHandlebar"
            label="Saddle To Handlebar Reach"
          >
            <InputNumber min={0} name="saddleToHandlebar" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleAngle")}
            name="saddleAngle"
            label="Saddle Angle"
          >
            <InputNumber name="saddleAngle" />
            <span className="units">(deg)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleForeAft")}
            name="saddleForeAft"
            label="Saddle Fore Aft"
          >
            <InputNumber min={0} name="saddleForeAft" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("stemLength")}
            name="stemLength"
            label="Stem Length"
          >
            <InputNumber min={0} name="stemLength" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("stemAngle")}
            name="stemAngle"
            label="Stem Angle"
          >
            <InputNumber name="stemAngle" />
            <span className="units">(deg)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("handlebarWidth")}
            name="handlebarWidth"
            label="Handlebar Width"
          >
            <InputNumber min={0} name="handlebarWidth" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("handlebarAngle")}
            name="handlebarAngle"
            label="Handlebar Angle"
          >
            <InputNumber name="handlebarAngle" />
            <span className="units">(deg)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("brakeLeverPosition")}
            name="brakeLeverPosition"
            label="Brake Lever Position"
          >
            <InputNumber min={0} name="brakeLeverPosition" />
            <span className="units">(mm)</span>
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("crankLength")}
            name="crankLength"
            label="Crank Length"
          >
            <InputNumber min={0} name="crankLength" />
            <span className="units">(mm)</span>
          </Form.Item>
          <SubmitButton>Save</SubmitButton>
        </Form>
      )}
    />
  );
};

export default BikeMeasurementsForm;
