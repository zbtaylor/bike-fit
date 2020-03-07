import React, { useState, useEffect } from "react";
import { Row, Col, PageHeader, Statistic } from "antd";
import { Form, Input, InputNumber, Select, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const BikeSpecsForm = ({ bike, setBike, create, update, history }) => {
  const initial = {
    nickname: bike.nickname || "",
    brand: bike.brand || "",
    model: bike.model || "",
    weight: bike.weight || "",
    type: bike.type || ""
  };

  const validation = Yup.object().shape({
    nickname: Yup.string().required(),
    brand: Yup.string().required(),
    model: Yup.string().required(),
    weight: Yup.number().required(),
    type: Yup.string().required()
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (create) {
      Axios.post(`/api/bikes/`, values)
        .then(res => {
          console.log(res);
          history.push(`/bikes/${res.data[0].id}`);
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (update) {
      Axios.put(`/api/bikes/${bike.id}`, values)
        .then(res => {
          setSubmitting(false);
          setBike(res.data[0]);
        })
        .catch(err => {
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
          <Form.Item name="weight" label="Weight">
            <InputNumber name="weight" />
          </Form.Item>
          {create && <SubmitButton>Add New Bike</SubmitButton>}
          {update && <SubmitButton>Save</SubmitButton>}
        </Form>
      )}
    />
  );
};

export default BikeSpecsForm;
