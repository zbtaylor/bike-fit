import React, { useState, useEffect } from "react";
import { Row, Col, PageHeader, Statistic } from "antd";
import { Form, Input, InputNumber, Select, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import BikeSpecsForm from "./BikeSpecsForm";

const BikeCreate = props => {
  const newBike = {
    nickname: "",
    brand: "",
    model: "",
    weight: "",
    type: ""
  };

  return (
    <>
      <PageHeader title="New Bike" />
      <Row>
        <Col span={10}>
          <BikeSpecsForm bike={newBike} create={true} {...props} />
        </Col>
      </Row>
    </>
  );
};

export default BikeCreate;
