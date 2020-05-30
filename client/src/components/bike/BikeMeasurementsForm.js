import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Radio, Row, Col, Spin, Skeleton } from "antd";
import { Form, Input, InputNumber, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import Axios from "axios";

const BikeMeasurementsForm = ({ bike, setHovered, id, setBike }) => {
  const initial = {
    saddleHeight: bike.history.saddleHeight,
    saddleHeightOverBars: bike.history.saddleHeightOverBars,
    saddleToHandlebar: bike.history.saddleToHandlebar,
    saddleAngle: bike.history.saddleAngle,
    saddleForeAft: bike.history.saddleForeAft,
    stemLength: bike.history.stemLength,
    stemAngle: bike.history.stemAngle,
    handlebarWidth: bike.history.handlebarWidth,
    handlebarAngle: bike.history.handlebarAngle,
    brakeLeverPosition: bike.history.brakeLeverPosition,
    crankLength: bike.history.crankLength,
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
    Axios.post(`/api/history`, values)
      .then((res) => {
        setSubmitting(false);
        setBike(res.data);
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
