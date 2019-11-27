import React from "react";
import { Button } from "semantic-ui-react";
import { Form as FormikForm, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

const Form = props => {
  const { errors, touched, match } = props;

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
      .min(4, "Password must be atleast 4 characters.")
      .required("Password is required.")
  }),

  handleSubmit(values, { props }) {
    if (props.match.url === "/login") {
      Axios.post("/api/auth/login", values)
        .then(res => {
          console.log(res);
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
})(Form);

export default UserForm;
