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
        <h2 className="center-text">Create New Password</h2>
        <Form layout="vertical">
          <Form.Item name="password">
            <Input.Password name="password" placeholder="New Password" />
          </Form.Item>
          <SubmitButton block>Create New Password</SubmitButton>
        </Form>
      </Col>
    </Row>
  );
};

const AuthSendPasswordReset = withFormik({
  mapPropsToValues({ password }) {
    return {
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    password: Yup.string()
      .min(4, "Password must be at least 4 characters long.")
      .required("Please provide a new password.")
  }),

  handleSubmit(values, { props, resetForm }) {
    const body = {
      hash: props.match.params.hash,
      password: values.password
    };
    Axios.post("/api/auth/reset", body)
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

export default AuthSendPasswordReset;
