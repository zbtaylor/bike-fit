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
        <h2 className="center-text">Forgot Your Password?</h2>
        <Form layout="vertical">
          <Form.Item name="email">
            <Input name="email" placeholder="Email" />
          </Form.Item>
          <SubmitButton block>Send Reset Link</SubmitButton>
        </Form>
      </Col>
    </Row>
  );
};

const AuthForgotPassword = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("This Email address is invalid.")
      .required("Please provide an Email address.")
  }),

  handleSubmit(values, { props, resetForm }) {
    Axios.post("/api/auth/forgot", values)
      .then(res => {
        if (res.status === 200) {
          message.success(res.data.message, 3).then(() => {
            message.loading("Redirecting back to log in...", 1).then(() => {
              props.history.push("/login");
            });
          });
          resetForm();
        }
      })
      .catch(err => {
        message.error(err.response.data.message, 4);
        resetForm();
      });
  }
})(InitialForm);

export default AuthForgotPassword;
