import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, SubmitButton } from "formik-antd";
import { Typography, Layout, Row, Col, Divider, message } from "antd";
import { withFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const { Paragraph } = Typography;

const InitialForm = ({ resetForm }) => {
  return (
    <Row type="flex" justify="center" align="middle" className="full-height">
      <Col span={6}>
        <Divider>Sign Up</Divider>
        <Form layout="vertical">
          <Form.Item name="email">
            <Input name="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password name="password" placeholder="Password" />
          </Form.Item>
          <SubmitButton block>Sign Up</SubmitButton>
        </Form>
        <Paragraph className="space-above-small center-text">
          <Link to="/login">Already a user?</Link>
        </Paragraph>
      </Col>
    </Row>
  );
};

const AuthSignup = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("This email address is invalid.")
      .required("Please provide an email address."),
    password: Yup.string()
      .min(4, "Your password must be at least 4 characters long.")
      .required("Please provide a password.")
  }),

  handleSubmit(values, { props, resetForm, setSubmitting }) {
    Axios.post("/api/auth/register", values)
      .then(res => {
        if (res.status === 200) {
          message.success(res.data.message, 4);
          resetForm();
        }
      })
      .catch(err => {
        message.error(err.response.data.message, 4);
        resetForm();
      });
  }
})(InitialForm);

export default AuthSignup;
