import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Radio, Row, Col, Spin, Skeleton } from "antd";
import { Form, Input, InputNumber, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import Axios from "axios";

const BikeMeasurementsForm = ({ bike, setHovered, id, setBike }) => {
  const initial = {
    saddleHeight: bike.saddleHeight,
    saddleHeightOverBars: bike.saddleHeightOverBars,
    saddleToHandlebar: bike.saddleToHandlebar,
    saddleAngle: bike.saddleAngle,
    saddleForeAft: bike.saddleForeAft,
    stemLength: bike.stemLength,
    stemAngle: bike.stemAngle,
    handlebarWidth: bike.handlebarWidth,
    handlebarAngle: bike.handlebarAngle,
    brakeLeverPosition: bike.brakeLeverPosition,
    crankLength: bike.crankLength
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
    crankLength: Yup.number()
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    Axios.put(`/api/bikes/${id}`, values)
      .then(res => {
        const updated = res.data[0];
        const history = {
          bike_id: id,
          saddleHeight_from: initial.saddleHeight,
          saddleHeight_to: updated.saddleHeight,
          saddleHeightOverBars_from: initial.saddleHeightOverBars,
          saddleHeightOverBars_to: updated.saddleHeightOverBars,
          saddleToHandlebar_from: initial.saddleToHandlebar,
          saddleToHandlebar_to: updated.saddleToHandlebar,
          saddleAngle_from: initial.saddleAngle,
          saddleAngle_to: updated.saddleAngle,
          saddleForeAft_from: initial.saddleForeAft,
          saddleForeAft_to: updated.saddleForeAft,
          stemLength_from: initial.stemLength,
          stemLength_to: updated.stemLength,
          stemAngle_from: initial.stemAngle,
          stemAngle_to: updated.stemAngle,
          handlebarWidth_from: initial.handlebarWidth,
          handlebarWidth_to: updated.handlebarWidth,
          handlebarAngle_from: initial.handlebarAngle,
          handlebarAngle_to: updated.handlebarAngle,
          brakeLeverPosition_from: initial.brakeLeverPosition,
          brakeLeverPosition_to: updated.brakeLeverPosition,
          crankLength_from: initial.crankLength,
          crankLength_to: updated.crankLength
        };
        Axios.post(`/api/history`, history)
          .then(res => {
            setSubmitting(false);
            setBike(updated);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
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
            <InputNumber min={0} name="saddleHeight" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleHeightOverBars")}
            name="saddleHeightOverBars"
            label="Saddle Height Over Bars"
          >
            <InputNumber
              min={0}
              name="saddleHeightOverBars"
              className="pull-right"
            />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleToHandlebar")}
            name="saddleToHandlebar"
            label="Saddle To Handlebar Reach"
          >
            <InputNumber
              min={0}
              name="saddleToHandlebar"
              className="pull-right"
            />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleAngle")}
            name="saddleAngle"
            label="Saddle Angle"
          >
            <InputNumber name="saddleAngle" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("saddleForeAft")}
            name="saddleForeAft"
            label="Saddle Fore Aft"
          >
            <InputNumber min={0} name="saddleForeAft" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("stemLength")}
            name="stemLength"
            label="Stem Length"
          >
            <InputNumber min={0} name="stemLength" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("stemAngle")}
            name="stemAngle"
            label="Stem Angle"
          >
            <InputNumber name="stemAngle" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("handlebarWidth")}
            name="handlebarWidth"
            label="Handlebar Width"
          >
            <InputNumber min={0} name="handlebarWidth" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("handlebarAngle")}
            name="handlebarAngle"
            label="Handlebar Angle"
          >
            <InputNumber name="handlebarAngle" className="pull-right" />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("brakeLeverPosition")}
            name="brakeLeverPosition"
            label="Brake Lever Position"
          >
            <InputNumber
              min={0}
              name="brakeLeverPosition"
              className="pull-right"
            />
          </Form.Item>
          <Form.Item
            onMouseEnter={() => setHovered("crankLength")}
            name="crankLength"
            label="Crank Length"
          >
            <InputNumber min={0} name="crankLength" className="pull-right" />
          </Form.Item>
          <SubmitButton>Save</SubmitButton>
        </Form>
      )}
    />
  );
};

export default BikeMeasurementsForm;
