import React, { useState, useEffect } from "react";
import { Row, Col, PageHeader, Statistic, message } from "antd";
import { Form, Input, InputNumber, Select, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const BikeInfoForm = ({ bike, setBike, create, update, history }) => {
  const initial = {
    nickname: bike.nickname || "",
    brand: bike.brand || "",
    model: bike.model || "",
    frameSize: bike.frameSize || "",
    weight: bike.weight || "",
    type: bike.type || "",
  };

  const validation = Yup.object().shape({
    nickname: Yup.string().required(),
    brand: Yup.string().required(),
    model: Yup.string().required(),
    frameSize: Yup.number().required(),
    weight: Yup.number().required(),
    type: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (create) {
      Axios.post(`/api/bikes/`, values)
        .then((res) => {
          history.push(`/bikes/${res.data[0].id}/current`);
        })
        .catch((err) => {
          message.error(err.response.data.message, 4);
          resetForm();
        });
    }
    if (update) {
      Axios.put(`/api/bikes/${bike.id}`, values)
        .then((res) => {
          setSubmitting(false);
          setBike(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Formik
      initialValues={initial}
      validationSchema={validation}
      onSubmit={handleSubmit}
      render={() => (
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
        >
          <Form.Item name="nickname" label="Nickname">
            <Input name="nickname" />
          </Form.Item>
          <Form.Item name="brand" label="Brand">
            <Input name="brand" />
          </Form.Item>
          <Form.Item name="model" label="Model">
            <Input name="model" />
          </Form.Item>
          <Form.Item name="frameSize" label="Frame Size">
            <InputNumber min={0} name="frameSize" />
          </Form.Item>
          <Form.Item name="weight" label="Weight">
            <InputNumber min={0} name="weight" />
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Select name="type">
              <Select.Option value="Road">Road</Select.Option>
              <Select.Option value="Mountain">Mountain</Select.Option>
              <Select.Option value="Time Trial">Time Trial</Select.Option>
              <Select.Option value="Gravel">Gravel</Select.Option>
              <Select.Option value="CX">CX</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>
          {create && <SubmitButton>Add New Bike</SubmitButton>}
          {update && <SubmitButton>Save</SubmitButton>}
        </Form>
      )}
    />
  );
};

export default BikeInfoForm;
