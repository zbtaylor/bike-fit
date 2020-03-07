import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Radio, Row, Col, Spin, Skeleton } from "antd";
import { Form, Input, InputNumber, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import Axios from "axios";

const BikeMeasurementsForm = ({ bike, setHovered, id, setBike }) => {
  const initial = {
    saddleHeight: bike.saddleHeight || "",
    saddleHeightOverBars: bike.saddleHeightOverBars || "",
    saddleToHandlebar: bike.saddleToHandlebar || "",
    saddleAngle: bike.saddleAngle || "",
    saddleForeAft: bike.saddleForeAft || "",
    stemLength: bike.stemLength || "",
    stemAngle: bike.stemAngle || "",
    handlebarWidth: bike.handlebarWidth || "",
    handlebarAngle: bike.handlebarAngle || "",
    brakeLeverPosition: bike.brakeLeverPosition || "",
    crankLength: bike.crankLength || ""
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
        console.log(res);
        setSubmitting(false);
        setBike(res.data[0]);
        // props.history.push(`/bikes/${id}`);
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
        <>
          <Row>
            <h2 className="subpage-header">Measurements</h2>
          </Row>
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
              <InputNumber min={0} name="saddleAngle" className="pull-right" />
            </Form.Item>
            <Form.Item
              onMouseEnter={() => setHovered("saddleForeAft")}
              name="saddleForeAft"
              label="Saddle Fore Aft"
            >
              <InputNumber
                min={0}
                name="saddleForeAft"
                className="pull-right"
              />
            </Form.Item>
            {/* <Form.Item
              onMouseEnter={() => setHovered("saddleBrandModel")}
              name="saddleBrandModel"
              label="Saddle Brand &amp; Model"
            >
              <Input name="saddleBrandModel" className="pull-right" />
            </Form.Item> */}
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
              <InputNumber min={0} name="stemAngle" className="pull-right" />
            </Form.Item>
            {/* <Form.Item
              onMouseEnter={() => setHovered("handlebarBrandModel")}
              name="handlebarBrandModel"
              label="Handlebar Brand &amp; Model"
            >
              <Input name="handlebarBrandModel" className="pull-right" />
            </Form.Item> */}
            <Form.Item
              onMouseEnter={() => setHovered("handlebarWidth")}
              name="handlebarWidth"
              label="Handlebar Width"
            >
              <InputNumber
                min={0}
                name="handlebarWidth"
                className="pull-right"
              />
            </Form.Item>
            <Form.Item
              onMouseEnter={() => setHovered("handlebarAngle")}
              name="handlebarAngle"
              label="Handlebar Angle"
            >
              <InputNumber
                min={0}
                name="handlebarAngle"
                className="pull-right"
              />
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
        </>
      )}
    />
  );
};

export default BikeMeasurementsForm;
