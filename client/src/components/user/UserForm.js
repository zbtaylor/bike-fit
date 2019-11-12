import React from "react";
import { Button } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

const Form = props => {
  const { errors, touched } = props;

  return (
    <FormikForm className="ui form">
      <div className="field">
        <label>Email</label>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="email" name="email" placeholder="eddy@merckx.com" />
      </div>
      <div className="field">
        <label>Password</label>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="******" />
      </div>
      <Button type="submit" className="ui primary button">
        Log In
      </Button>
    </FormikForm>
  );
};

const UserForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required("email is required."),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters.")
      .required("Password is required.")
  }),

  handleSubmit(values, { props }) {
    if (props.match.url === "/login") {
      Axios.post("/api/users/login")
        .then(res => {
          props.history.push("/bikes");
        })
        .catch(err => {
          // handle error
        });
    } else {
      Axios.post("/api/users/register")
        .then(res => {
          props.history.push("/login");
        })
        .catch(err => {
          // handle error
        });
    }
  }
})(Form);

export default UserForm;
