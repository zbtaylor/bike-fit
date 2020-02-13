import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, SubmitButton } from "formik-antd";
import { Layout, Row, Col, Divider, message } from "antd";
import { withFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const InitialForm = ({ resetForm }) => {
  return (
    <Row type="flex" justify="center" align="middle" className="full-height">
      <Col span={6}>
        <Divider>My Bike Fit Journal</Divider>
        <h2 className="center-text">Log In</h2>
        <Form layout="vertical">
          <Form.Item name="email">
            <Input name="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password name="password" placeholder="Password" />
          </Form.Item>
          <SubmitButton block>Log In</SubmitButton>
        </Form>
        <Link to="/register" className="space-above-small center-text">
          Not a user?
        </Link>
      </Col>
    </Row>
  );
};

const AuthLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("This Email address is invalid.")
      .required("Please provide an Email address."),
    password: Yup.string().required("Please provide a password.")
  }),

  handleSubmit(values, { props, resetForm }) {
    Axios.post("/api/auth/login", values)
      .then(res => {
        if (res.status === 200) {
          props.history.push("/bikes");
        }
      })
      .catch(err => {
        message.error(err.response.data.message, 4);
        resetForm();
      });
  }
})(InitialForm);

export default AuthLogin;
