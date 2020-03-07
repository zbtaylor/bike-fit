import React, { useState, useEffect } from "react";
import { Row, Col, PageHeader, Statistic } from "antd";
import { Form, Input, InputNumber, Select, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const BikeCreate = props => {
  const initial = {
    nickname: "",
    brand: "",
    model: "",
    weight: "",
    type: ""
  };

  const validation = Yup.object().shape({
    nickname: Yup.string().required(),
    brand: Yup.string().required(),
    model: Yup.string().required(),
    weight: Yup.number().required(),
    type: Yup.string().required()
  });

  const handleSubmit = (values, { props }) => {
    Axios.put(`/api/bikes/${props.id}`, values)
      .then(res => {
        props.history.push(`/bikes/view/${props.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <PageHeader title="New Bike" />
      <Row>
        <Col span={10}>
          <Formik
            initialValues={initial}
            validationSchema={validation}
            onSubmit={(values, { resetForm }) => {}}
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
                <SubmitButton>Add New Bike</SubmitButton>
              </Form>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default BikeCreate;
