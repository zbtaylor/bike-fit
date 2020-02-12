import React from "react";
import { Form, Input, SubmitButton } from "formik-antd";
import { withFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const InitialForm = ({ buttonText }) => {
  return (
    <Form layout="vertical">
      <Form.Item name="email">
        <Input name="email" placeholder="eddy@merckx.com" />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password name="password" placeholder="******" />
      </Form.Item>
      <SubmitButton>{buttonText}</SubmitButton>
    </Form>
  );
};

// export default AuthForm;

const AuthForm = withFormik({
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
      .min(4, "This password is invalid.")
      .required("Please provide a password.")
  }),

  handleSubmit(values, { props }) {
    if (props.match.url === "/login") {
      Axios.post("/api/auth/login", values)
        .then(res => {
          props.history.push("/bikes");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      Axios.post("/api/auth/register", values)
        .then(res => {
          props.history.push("/login");
        })
        .catch(err => {
          // handle error
        });
    }
  }
})(InitialForm);

export default AuthForm;
