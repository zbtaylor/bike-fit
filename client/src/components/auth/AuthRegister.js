import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, SubmitButton } from "formik-antd";
import { Layout, Row, Col } from "antd";
import { withFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const InitialForm = ({ buttonText }) => {
  return (
    <Row type="flex" justify="center" align="middle" className="full-height">
      <Col span={6}>
        <h2>Register</h2>
        <Form layout="vertical">
          <Form.Item name="email">
            <Input name="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password name="password" placeholder="Password" />
          </Form.Item>
          <SubmitButton>Register</SubmitButton>
        </Form>
        <Link to="/login">Already a user?</Link>
      </Col>
    </Row>
  );
};

// export default AuthForm;

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
    password: Yup.string()
      .min(4, "Your password must be at least 4 characters long.")
      .required("Please provide a password.")
  }),

  handleSubmit(values, { props }) {
    Axios.post("/api/auth/register", values)
      .then(res => {
        props.history.push("/login");
      })
      .catch(err => {
        // handle error
      });
  }
})(InitialForm);

export default AuthLogin;
